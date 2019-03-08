/* eslint-disable */
import VeemSDK from '../'

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

const QUOTE = {
  fromAmount: 100,
  fromCurrency: 'USD',
  recipientAccountEmail: 'test@domain.com',
  toAmount: undefined,
  toCountry: 'US',
  toCurrency: 'USD',
}

const CONTACT = {
  email: `test+contact2@domain.com`,
  firstName: 'FName',
  lastName: 'LName',
  isoCountryCode: 'US',
  phoneDialCode: '+1',
  phoneNumber: '6132451245',
  businessName: 'BName',
}

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
} = new VeemSDK({
  accessToken: '246ff312-f7ff-496f-bab2-38d132434ba7',
})

// metadata.getCountryCurrencyMap(callback)

// payment.list(callback)
// payment.get(54090, callback)
// payment.draft(PAYMENT, callback)
// payment.send(PAYMENT, callback)
// payment.sendById(54133, callback)
// payment.cancel(54135, callback)

// invoice.get(36909, callback)
// invoice.draft(INVOICE, callback)
// invoice.send(INVOICE, callback)
// invoice.sendById(36913, callback)
// invoice.cancel(36913, callback)

// contact.list(callback)
// contact.get(1459, callback)
// contact.create(CONTACT, callback)

// customer.list('bitheads2@mailinator.com', callback)

// exchangeRate.quote(QUOTE, callback)
