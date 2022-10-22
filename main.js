const Telegram = require("./telegram");
const getMovements = require("./getMovements");
const helpers = require("./helpers");

const telegram = new Telegram();
let lastMovement;

const main = async () => {
  let movements = await getMovements();

  if (lastMovement) {
    let newMovements = helpers.getNewMovements(lastMovement, movements);
    if (newMovements.length > 0) {
      newMovements.reverse().map((mov) => {
        telegram.sendTelegramMessage(
          `<strong>🏦 Banco</strong>: BBVA\n<strong>❗️ Concepto</strong>: ${mov.concepto}\n<strong>💸 Importe</strong>: ${mov.importe}`
        );
      });
      lastMovement = newMovements[0];
    }
  } else {
    lastMovement = movements[0];
  }
};

module.exports = main;
