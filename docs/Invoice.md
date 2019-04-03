# Invoice Controller

Method | HTTP request
------------- | -------------
[**get**](Invoice.md#get) | **GET** /veem/v1.1/invoices/{invoice_id}
[**send**](Invoice.md#send) | **POST** /veem/v1.1/invoices
[**sendById**](Invoice.md#sendById) | **POST** /veem/v1.1/invoices/{invoice_id}/approve
[**draft**](Invoice.md#draft) | **POST** /veem/v1.1/invoices
[**cancel**](Invoice.md#cancel) | **POST** /veem/v1.1/invoices/{invoice_id}/cancel

## get

Retrieves a single invoice, based on specified a invoice ID.

#### Return

Returns a single `Invoice` [model](../lib/models/InvoiceResponse.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.invoice.get(<invoice_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## send

Creates and initiates a invoice.

#### Return

Returns the created `Invoice` [model](../lib/models/InvoiceResponse.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.invoice.send(payload)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## sendById

Creates and initiates the invoice specified by the invoice ID.

#### Return

Returns the created `Invoice` [model](../lib/models/InvoiceResponse.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.invoice.sendById(<invoice_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## draft

Creates a draft invoice.

#### Return

Returns the draft `Invoice` [model](../lib/models/InvoiceResponse.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.invoice.draft(payload)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## cancel

Cancels a invoice, based on specified invoice ID.

#### Return

Returns the cancelled `Invoice` [model](../lib/models/InvoiceResponse.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.invoice.cancel(<invoice_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
