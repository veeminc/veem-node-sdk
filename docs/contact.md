# Contact Controller

Method | HTTP request
------------- | -------------
[**get**](contact.md#get) | **GET** /veem/v1.1/contacts/{contact_id}
[**list**](contact.md#list) | **GET** /veem/v1.1/contacts
[**getBatch**](contact.md#getBatch) | **GET** /veem/v1.1/contacts/batch/{batch_id}
[**create**](contact.md#create) | **POST** /veem/v1.1/contacts
[**create (batch)**](contact.md#create) | **POST** /veem/v1.1/contacts/batch

## get

Retrieves a single contact, based on specified a contact ID.

#### Return

Returns a single `Contact` [model](../lib/models/contact-response.js) instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.contact.get(<contact_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## list

Retrieves a list of contacts.

#### Return

Returns a list of `Contact` [model](../lib/models/contact-response.js) instances.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

var options = {
  pageNumber: 2,
  pageSize: 50,
}

sdk.contact.list(options)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## getBatch

Retrieves a batch, based on specified a batch ID.

#### Return

Returns a single batch instance.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.contact.getBatch(<batch_id>)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```

## create

Creates a contact, or a list of contacts.

#### Return

Returns the created `Contact` [model](../lib/models/contact-response.js) instance if sending a single contact.
Returns batch instance if sending multiple contacts.

#### Usage

```javascript
var sdk = new VeemSDK({ accessToken: <access_token> })

sdk.contact.create(payload)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
