var VeemSDK = require('../')
var fs = require('fs')

const PAYMENT = {
  amount: {
    currency: 'USD',
    number: 100.00
  },
  payee: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234'
  }
}

const INVOICE = {
  amount: {
    currency: 'USD',
    number: 100.00
  },
  payer: {
    countryCode: 'CA',
    email: 'bitheads2@mailinator.com',
    firstName: 'test2',
    lastName: 'test2',
    type: 'Personal',
    phone: '+1-613-555-1234'
  }
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

var callback = function(error, data, response) {
  if (error) {
    console.warn('ERROR')
    // console.error(JSON.parse(error, null, 2))
    console.warn(response.request)
    console.warn('ERROR')
  } else {
    console.log('API called successfully.')
    console.log(JSON.parse(data, null, 2))
  }
}

function main() {
  // var file = fs.readFileSync(__dirname+'/attachment.txt')
  var file = __dirname+'/attachment.txt'
}

// const veemSDK = new VeemSDK({
//   clientId: 'BizName-4be1d204',
//   clientSecret: '732b5451-5265-4daa-8aea-335971603ef1',
// })

const veemSDK = new VeemSDK({
  accessToken: '246ff312-f7ff-496f-bab2-38d132434ba7',
})
var file = __dirname+'/image.png'
var imageBuffer = fs.createReadStream(file)
// veemSDK.metadata.getCountryCurrencyMap(callback)

// veemSDK.payment.list(callback)
// veemSDK.payment.get(54090, callback)
// veemSDK.payment.draft(PAYMENT, callback)
// veemSDK.payment.send(PAYMENT, callback)
// veemSDK.payment.sendById(54133, callback)
// veemSDK.payment.cancel(54135, callback)

// veemSDK.invoice.get(36909, callback)
// veemSDK.invoice.draft(INVOICE, callback)
// veemSDK.invoice.send(INVOICE, callback)
// veemSDK.invoice.sendById(36913, callback)
// veemSDK.invoice.cancel(36913, callback)

// veemSDK.contact.list(callback)
// veemSDK.contact.get(1459, callback)
// veemSDK.contact.create(CONTACT, callback)

// veemSDK.customer.list('bitheads2@mailinator.com', callback)

// veemSDK.exchangeRate.quote(QUOTE, callback)

// veemSDK.attachment.upload(imageBuffer, callback)
