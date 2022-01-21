import * as functions from 'firebase-functions';
import * as twilio from './handlers/twilio'
import * as users from './handlers/user'
import * as adminFunctions from './handlers/admin'
import * as admin from 'firebase-admin'
import * as triggers from './triggers'

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
exports.admin = adminFunctions


exports.triggers = triggers