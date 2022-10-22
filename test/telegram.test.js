const Telegram = require("../telegram");
const telegram = new Telegram();

test("Two equal objects", async () => {
  const mov = {
    concepto: "Test",
    importe: 100,
  };
  const message = `<strong>🏦 Banco</strong>: BBVA\n<strong>❗️ Concepto</strong>: ${mov.concepto}\n<strong>💸 Importe</strong>: ${mov.importe}`;

  const response = await telegram.sendTelegramMessage(message);

  expect(response).toBe(true);
});
