import { GET, POST } from 'constants/http-methods'
import { FORM_DATA } from 'constants/content-type'
import { OCTET_STREAM } from 'constants/accepts'

class Attachment {
  constructor (apiClient) {
    this.apiClient = apiClient
  }

  upload (file, callback) {
    console.warn('attachment:upload')
    console.warn(file)

    return this.apiClient.call({
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
    return this.apiClient.call({
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
