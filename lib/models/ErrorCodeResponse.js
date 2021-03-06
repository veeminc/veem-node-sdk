import Schema from './Schema'

class ErrorCodeResponse extends Schema {}

ErrorCodeResponse.schema = {
  title: 'ErrorCodeResponse',
  type: 'object',
  properties: {
    errorCode: {
      type: 'number',
    },
    errorMessage: {
      type: 'string',
    },
  },
}

export default ErrorCodeResponse
