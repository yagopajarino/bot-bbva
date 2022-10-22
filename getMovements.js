const axios = require("axios");
require("dotenv").config();

const getMovements = async () => {
  const response = await axios.post(
    "https://online.bbva.com.ar/fnetcore/servicios/cliente/productos/cuentas/movimientos",
    {
      idProducto: process.env.PROD_ID,
    },
    {
      params: {
        ts: `${new Date().getTime()}`,
      },
      headers: {
        authority: "online.bbva.com.ar",
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,es-US;q=0.8,es-ES;q=0.7,es;q=0.6",
        "content-type": "application/json;charset=UTF-8",
        cookie: process.env.COOKIE,
        origin: "https://online.bbva.com.ar",
        referer: "https://online.bbva.com.ar/fnetcore/",
        uid: process.env.COOKIE,
        "x-xsrf-token": process.env.XSRF_TOKEN,
      },
    }
  );
  return response.data.result.movimientos;
};

module.exports = getMovements;
