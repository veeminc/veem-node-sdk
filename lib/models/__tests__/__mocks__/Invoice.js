import moment from 'moment'
import uniqueId from 'lodash/uniqueId'
import MONETARY_AMOUNT_MOCK from './MonetaryAmount'
import PAYER_MOCK from './payer'

const INVOICE = {
  amount: MONETARY_AMOUNT_MOCK,
  approveAutomatically: false,
  ccEmails: [
    'test+cc1@domain.com',
    'test+cc2@domain.com',
  ],
  dueDate: moment().unix(),
  exchangeRateQuoteId: uniqueId(),
  externalInvoiceRefId: uniqueId(),
  notes: 'Lorem ipsum',
  payer: PAYER_MOCK,
}

export default INVOICE
