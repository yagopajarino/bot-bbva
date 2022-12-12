# bot-bbva

https://user-images.githubusercontent.com/50267208/207090618-5fa2bac5-b62f-4a3c-84ad-cb3ca9aefab7.mp4

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
## Tutorial

Dejo un tutorial para implementar el bot, idealmente en cualquier banco.

### Objetivo

Obtener el detalle de los últimos movimientos de la cuenta bancaria y para cada movimiento nuevo, enviar una notificación por Telegram.

Para resolver el problema, la idea es dividirlo en dos partes. Obtener los datos de movimientos (uno) y enviar las notificaciones por Telegram (dos).

### Obtener movimientos

Para obtener los movimientos, necesitamos realizar la misma consulta que hace el cliente del banco a la api. Para eso, podemos utilizar las devtools del navegador, en la pestaña red, que permite revisar las requests que hace la página web que visitamos y ubicar la request que hace el navegador a la api.

Una vez ubicada la request, podemos copiarla como CURL, utilizar un parser ([CURL converter](https://curlconverter.com/)) y obtener el código para hacer la request en el lenguaje necesario (Node.js -> Axios)

La respuesta de la request, idealmente en formato JSON, debe tener un array con los últimos movimientos del banco.

### Ejemplo BBVA

Para obtener los datos de últimos movimientos de BBVA

1. Iniciar sesión en BBVA
2. Abrir las devtools en la pestaña RED
3. Hacer click en la cuenta que se quiere saber los movimientos.
4. En las devtools buscar la request de movimientos

En BBVA aparece así

![image](https://user-images.githubusercontent.com/50267208/198855520-850876f6-726a-4635-a5ca-666eb0b9acd0.png)

5. Copiar la request como CURL

![image](https://user-images.githubusercontent.com/50267208/198855549-1839bd57-453d-49ef-b96e-45bfe4d80319.png)

6. Parsearla en [CURL converter](https://curlconverter.com/) para Node.js -> Axios 

### Telegram bot

Para poder enviar las notificaciones por Telegram, hay que crear un bot.

Documentación para configurar el bot de Telegram: https://core.telegram.org/bots/features#botfather
