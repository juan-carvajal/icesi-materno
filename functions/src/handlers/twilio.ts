import * as functions from 'firebase-functions';
import { TwilioCallRequestInput } from '../models/twilio';
import { MakePhoneCall as call } from '../services/twillio';
import { IsAdmin } from '../services/utils';


export const TwiMLHandler = functions.https.onRequest((request, response) => {

  const message = request.query['message']

  if (!message) {
    response.status(400).send("Please send required query param message")
    return
  }

  const xmlString = `<Response>
        <Say voice="alice" language="es-MX">${message}</Say>
      </Response>
  `

  response.status(200)
    .contentType('text/xml; charset=utf8')
    .send(xmlString);
});


// export const MakePhoneCall = functions.https.onRequest((request, response) => {

//   const input = request.body as TwilioCallRequestInput

//   call(input.to, input.message).then((callInstance) => {
//     response.status(200).send(callInstance)
//   }).catch((err => {
//     functions.logger.error(err)
//     response.status(500).end()
//   }))

// })

export const MakePhoneCall = functions.https.onCall(async ({ message, to }: TwilioCallRequestInput, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called ' +
      'while authenticated.');
  }


  if (!message || !to) {
    throw new functions.https.HttpsError('failed-precondition', 'Missing required payload message or to.');
  }



  const callerUID = context.auth.uid

  const isUserAdmin = await IsAdmin(callerUID)

  if (!isUserAdmin) {
    throw new functions.https.HttpsError('permission-denied', 'Not authorized to perform this operation.');
  }

  return call(to, message)
});