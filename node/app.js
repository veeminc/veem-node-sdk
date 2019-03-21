/* eslint-disable */
import first from 'lodash/first'
import assign from 'lodash/assign'
import VeemSDK from '../lib'
import fs from 'fs'

const file = __dirname+'/image.png'
const imageBuffer = fs.createReadStream(file)

const PAYMENT = {
  amount: {
    currency: 'USD',
    number: 100.00,
  },
  payee: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234',
  },
}

const PAYMENTS = [
  {
    batchItemId: 1,
    ...PAYMENT,
  },
  {
    batchItemId: 2,
    amount: {
      currency: 'USD',
      number: 240.00,
    },
    payee: {
      countryCode: 'CA',
      email: 'bitheads3@mailinator.com',
      firstName: 'test3',
      lastName: 'test3',
      type: 'Personal',
      phone: '+1-613-355-1523',
    },
  }
]

const ATTACHMENTS = [
  imageBuffer,
  imageBuffer,
]

const PAYMENT_WITH_ATTACHMENTS = assign({}, PAYMENT, { attachments: ATTACHMENTS })

const INVOICE = {
  amount: {
    currency: 'USD',
    number: 100.00,
  },
  payer: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234',
  },
}

const QUOTES = [
  {
    batchItemId: 1,
    fromAmount: 100,
    fromCurrency: 'USD',
    recipientAccountEmail: 'test@domain.com',
    toAmount: undefined,
    toCountry: 'US',
    toCurrency: 'USD',
  },
  {
    batchItemId: 2,
    fromAmount: 127,
    fromCurrency: 'CAD',
    recipientAccountEmail: 'test@domain.com',
    toAmount: undefined,
    toCountry: 'US',
    toCurrency: 'USD',
  }
]

const QUOTE = first(QUOTES)

const CONTACTS = [
  {
    batchItemId: 1,
    email: `test+contact1@domain.com`,
    firstName: 'FName1',
    lastName: 'LName1',
    isoCountryCode: 'US',
    phoneDialCode: '+1',
    phoneNumber: '6132451245',
    businessName: 'BName1',
  },
  {
    batchItemId: 2,
    email: `test+contact2@domain.com`,
    firstName: 'FName2',
    lastName: 'LName2',
    isoCountryCode: 'CA',
    phoneDialCode: '+1',
    phoneNumber: '6132451245',
    businessName: 'BName2',
  },
]

const CONTACT = first(CONTACTS)

const callback = (error, data, response) => {
  if (error) {
    console.warn('ERROR')
    console.warn(response.request)
  } else {
    console.log('API called successfully.')
    console.log(JSON.parse(data, null, 2))
  }
}

const {
  metadata,
  payment,
  invoice,
  contact,
  customer,
  exchangeRate,
  attachment,
  webhook,
} = new VeemSDK({
  accessToken: '246ff312-f7ff-496f-bab2-38d132434ba7',
})

// metadata.getCountryCurrencyMap(callback)

// payment.list(callback)
// payment.get(54090, callback)
// payment.getBatch(123, callback)
// payment.draft(PAYMENT, callback)
payment.draft(PAYMENT_WITH_ATTACHMENTS, callback)
// payment.draft(PAYMENTS, callback)
// payment.send(PAYMENT, callback)
// payment.send(PAYMENTS, callback)
// payment.sendById(54133, callback)
// payment.cancel(54135, callback)

// invoice.get(36909, callback)
// invoice.draft(INVOICE, callback)
// invoice.send(INVOICE, callback)
// invoice.sendById(36913, callback)
// invoice.cancel(36913, callback)

// contact.list(callback)
// contact.get(1459, callback)
// contact.getBatch(123, callback)
// contact.create(CONTACT, callback)
// contact.create(CONTACTS, callback)

// customer.list('bitheads2@mailinator.com', callback)

// exchangeRate.quote(QUOTE, callback)
// exchangeRate.quote(QUOTES, callback)

// attachment.upload(imageBuffer, callback)

// webhook.get(1, callback)
// webhook.list(callback)
