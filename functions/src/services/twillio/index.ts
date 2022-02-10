import * as client from 'twilio'
import * as functions from 'firebase-functions';
import { gcpSecretsLoader } from '../secrets'


const { phone_number,
  account_sid } = functions.config().twilio as { phone_number: string, account_sid: string }

const TWIML_URL = 'https://us-central1-icesi-materno.cloudfunctions.net/twilio-TwiMLHandler'

export const MakePhoneCall = (to: string, message: string) => {
  const url = encodeURI(`${TWIML_URL}?message=${message}`)

  return gcpSecretsLoader('send-message-TWILIO_AUTH_TOKEN').then(authToken => {
    return client(account_sid, authToken)
  }).then(twilioClient => {
    return twilioClient.calls.create({ to, url, from: phone_number })
  })
}

export const MakeBatchPhoneCall = async (phones: string[], message: string) => {

  const url = encodeURI(`${TWIML_URL}?message=${message}`)

  const twilioClient = await gcpSecretsLoader('send-message-TWILIO_AUTH_TOKEN').then(authToken => {
    return client(account_sid, authToken)
  })

  return Promise.all(phones.map(phone => {
    return twilioClient.calls.create({ to: phone, url, from: phone_number })
  }))
}

