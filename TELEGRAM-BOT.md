# Bot educativo de Telegram

Este bot lee automáticamente los nombres existentes dentro de `index.html`. No mantiene una segunda lista ni inventa productos.

## 1. Crear el bot

1. Abre Telegram y conversa con `@BotFather`.
2. Envía `/newbot` y sigue sus instrucciones.
3. Guarda el token como una contraseña. No lo publiques ni lo pegues en `index.html`.

## 2. Configurar el proyecto

En PowerShell, dentro de esta carpeta:

```powershell
Copy-Item .env.example .env
notepad .env
```

Dentro de `.env`, pega el token después del signo `=`:

```text
TELEGRAM_BOT_TOKEN=TU_TOKEN_REAL
```

## 3. Iniciar y detener

```powershell
node telegram-bot.js
```

Para detener el bot, presiona `Ctrl+C`.

## Comandos disponibles

- `/start`
- `/catalogo`
- `/ayuda`

También se puede escribir parte del nombre de un producto para buscarlo. El bot es una práctica educativa y no procesa pagos ni pedidos.
