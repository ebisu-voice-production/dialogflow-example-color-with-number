const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

app.intent('color_with_number', (conv, { color, number }) => {
  conv.close(`You said color is ${color} and number is ${number}.`);
});

exports.colorWithNumber = functions.https.onRequest(app);
