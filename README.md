# veem-node-sdk

[![CircleCI](https://circleci.com/gh/aligncommerce/veem-node-sdk/tree/master.svg?style=svg&circle-token=b130e117704a92b3e0606ebcd8068eda7c2a54c6)](https://circleci.com/gh/aligncommerce/veem-node-sdk/tree/master)

The Veem Node SDK provides a simple interface for interacting with the Veem Gateway API for server-side Javascript applications.

## References

- [Veem Gateway API](https://developer.veem.com/reference)

## Installation

```
npm install veem-node-sdk --save
```

## Usage

The Veem Node SDK requires you to generate an access token in order to authenticate the requests. You can manage your applications [here]().

```javascript
import Veem from 'veem-node-sdk'

var Veem = new Veem({
  accessToken: '<access_token>',
})

Veem.payment.send(payment, callback)
```

## Using Promises

The SDK supports Promises for handling responses and errors:

```javascript
Veem.payment.send(payment)
  .then(responseBody => console.log(responseBody))
  .catch(error => console.error(error))
```
