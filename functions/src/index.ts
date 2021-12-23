import * as functions from 'firebase-functions';
import * as twilio from './handlers/twilio'
import * as users from './handlers/user'
import * as admin from 'firebase-admin'


admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  console.log(process.env.FUNCTIONS_EMULATOR)
  console.log(process.env)
  response.send("Hello from Firebase!");
});
//projects/292351380464/secrets/send-message-TWILIO_AUTH_TOKEN

exports.twilio = twilio
exports.users = users