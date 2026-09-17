'use strict';

const fs = require('node:fs');
const path = require('node:path');

const PROJECT_DIR = __dirname;
const ENV_PATH = path.join(PROJECT_DIR, '.env');
const CATALOG_PATH = path.join(PROJECT_DIR, 'index.html');

function loadLocalEnvironment() {
  if (!fs.existsSync(ENV_PATH)) return;

  const lines = fs.readFileSync(ENV_PATH, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const clean = line.trim();
    if (!clean || clean.startsWith('#')) continue;

    const separator = clean.indexOf('=');
    if (separator < 1) continue;

    const key = clean.slice(0, separator).trim();
    const value = clean.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
    if (!process.env[key]) process.env[key] = value;
  }
}

function readCatalogNames() {
  const html = fs.readFileSync(CATALOG_PATH, 'utf8');
  const catalog = html.match(/const catalogProducts\s*=\s*\[([\s\S]*?)\n\s*\];/);
  if (!catalog) throw new Error('No se encontró catalogProducts dentro de index.html.');

  const names = [...catalog[1].matchAll(/\bname:\s*'([^']+)'/g)].map(match => match[1]);
  if (!names.length) throw new Error('El catálogo no contiene nombres de productos.');
  return names;
}

function normalize(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es')
    .replace(/[^a-z0-9$]+/g, ' ')
    .trim();
}

function findProducts(input, productNames) {
  const query = normalize(input);
  if (!query) return [];

  const queryWords = query.split(/\s+/).filter(word => word.length > 2);
  return productNames.filter(name => {
    const normalizedName = normalize(name);
    return normalizedName.includes(query) || queryWords.some(word => normalizedName.includes(word));
  });
}

function buildReply(input, productNames) {
  const command = input.trim().split(/\s+/)[0].toLocaleLowerCase('es').split('@')[0];

  if (command === '/start') {
    return 'Hola. Este es el asistente educativo conectado al catálogo de la página. Usa /catalogo para ver los productos o escribe el nombre de uno para buscarlo.';
  }

  if (command === '/catalogo') {
    return `Productos disponibles en el catálogo:\n\n${productNames.map((name, index) => `${index + 1}. ${name}`).join('\n')}`;
  }

  if (command === '/ayuda') {
    return 'Comandos disponibles:\n/start — Iniciar\n/catalogo — Ver el catálogo\n/ayuda — Mostrar esta ayuda\n\nTambién puedes escribir el nombre de un producto.';
  }

  const matches = findProducts(input, productNames);
  if (matches.length === 1) return `Encontré este producto en el catálogo:\n\n${matches[0]}`;
  if (matches.length > 1) return `Encontré estas coincidencias:\n\n${matches.map(name => `• ${name}`).join('\n')}`;
  return 'No encontré una coincidencia. Usa /catalogo para revisar los nombres disponibles.';
}

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function startBot() {
  loadLocalEnvironment();
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    throw new Error('Falta TELEGRAM_BOT_TOKEN. Copia .env.example como .env y agrega el token de @BotFather.');
  }

  const productNames = readCatalogNames();
  const apiBase = `https://api.telegram.org/bot${token}`;
  let offset = 0;
  let running = true;

  async function callTelegram(method, payload = {}) {
    const response = await fetch(`${apiBase}/${method}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.description || `Telegram respondió con estado ${response.status}.`);
    return data.result;
  }

  process.once('SIGINT', () => { running = false; });
  process.once('SIGTERM', () => { running = false; });

  await callTelegram('setMyCommands', {
    commands: [
      { command: 'start', description: 'Iniciar el asistente' },
      { command: 'catalogo', description: 'Ver productos del catálogo' },
      { command: 'ayuda', description: 'Mostrar ayuda' }
    ]
  });

  const profile = await callTelegram('getMe');
  console.log(`Bot conectado: @${profile.username}`);
  console.log(`Catálogo leído desde index.html: ${productNames.length} productos.`);
  console.log('Presiona Ctrl+C para detenerlo.');

  while (running) {
    try {
      const updates = await callTelegram('getUpdates', {
        offset,
        timeout: 30,
        allowed_updates: ['message']
      });

      for (const update of updates) {
        offset = update.update_id + 1;
        const message = update.message;
        if (!message?.text || !message.chat?.id) continue;

        await callTelegram('sendMessage', {
          chat_id: message.chat.id,
          text: buildReply(message.text, productNames)
        });
      }
    } catch (error) {
      if (!running) break;
      console.error(`Conexión interrumpida: ${error.message}`);
      await wait(2000);
    }
  }

  console.log('Bot detenido.');
}

if (require.main === module) {
  startBot().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = { buildReply, findProducts, readCatalogNames };
