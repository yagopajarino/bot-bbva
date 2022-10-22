# bot-bbva

Notificaciones automatizadas de movimientos en cuentas de BBVA.

Basado en el tweet de [@DamianCatanzaro](https://twitter.com/DamianCatanzaro/status/1582422766971547649)

## Configuración

En un archivo `.env` configurar las siguientes variables de entorno necesarias para hacer requests al banco y al bot de telegram

```javascript
//Para BBVA
COOKIE=
UID=
XSRF_TOKEN=
PROD_ID=

// Para Telegram
TELEGRAM_BOTID=
TELEGRAM_CHATID=
```

Documentación para configurar el bot de Telegram: https://core.telegram.org/bots/features#botfather
