import { GET, POST } from 'constants/http-methods'
import { FORM_DATA } from 'constants/content-type'
import { OCTET_STREAM } from 'constants/accepts'

class Attachment {
  constructor (sdk) {
    this.sdk = sdk
  }

  upload (file, callback) {
    return this.sdk.apiClient.call({
      method: POST,
      path: `/veem/v1.1/attachments`,
      requestHeaderOptions: {
        'Content-Type': FORM_DATA,
      },
      payload: {
        file,
      },
    }, callback)
  }

  download (attachment, callback) {
    return this.sdk.apiClient.call({
      method: GET,
      path: `/veem/v1.1/attachments`,
      requestHeaderOptions: {
        Accept: OCTET_STREAM,
      },
      queries: attachment,
    }, callback)
  }
}

export default Attachment
