# Payment Controller

Method | HTTP request
------------- | -------------
[**get**](payment.md#get) | **GET** /veem/v1.1/payments/{payment_id}
[**list**](payment.md#list) | **GET** /veem/v1.1/payments
[**getBatch**](payment.md#getBatch) | **GET** /veem/v1.1/payments/batch/{batch_id}
[**send (single)**](payment.md#send) | **POST** /veem/v1.1/payments
[**send (batch)**](payment.md#send)| **POST** /veem/v1.1/batch/payments
[**sendById**](payment.md#sendById) | **POST** /veem/v1.1/payments/{payment_id}/approve
[**draft (single)**](payment.md#draft) | **POST** /veem/v1.1/payments
[**draft (batch)**](payment.md#send)| **POST** /veem/v1.1/batch/payments
[**cancel**](payment.md#cancel) | **POST** /veem/v1.1/payments/{payment_id}/cancel

## get

Retrieves a single payment, based on specified a payment ID.

#### Return

Returns a single `Payment` [model](../lib/models/payment-response.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.get(<payment_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## list

Retrieves a list of payments.

#### Return

Returns a list of `Payment` [model](../lib/models/payment-response.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

var options = {
  pageNumber: 2,
  pageSize: 50,
}

sdk.payment.list(options)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## getBatch

Retrieves a batch, based on specified a batch ID.

#### Return

Returns a single batch instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.getBatch(<batch_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## send

Creates and initiates a payment, or a list of payments.

#### Return

Returns the created `Payment` [model](../lib/models/payment-response.js) instance if sending a single payment.
Returns batch instance if sending multiple payments.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.send(payload)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## sendById

Creates and initiates the payment specified by the payment ID.

#### Return

Returns the created `Payment` [model](../lib/models/payment-response.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.sendById(<payment_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## draft

Creates a draft payment, or a list of payments.

#### Return

Returns the draft `Payment` [model](../lib/models/payment-response.js) instance if sending a single payment.
Returns batch instance if sending multiple payments.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.draft(payload)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```

## cancel

Cancels a payment, based on specified payment ID.

#### Return

Returns the cancelled `Payment` [model](../lib/models/payment-response.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.payment.cancel(<payment_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.log(error))
```
