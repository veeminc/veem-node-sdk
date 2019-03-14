import nock from 'nock'
import sinon from 'sinon'
import AttachmentController from '../attachment'
import ApiClient from 'utils/api-client'

describe('Attachment Controller', () => {
  const apiClient = new ApiClient()
  const scope = nock('https://sandbox-api.veem.com/veem/v1.1/')

  let attachmentController

  beforeAll(() => {
    attachmentController = new AttachmentController(apiClient)
  })

  afterEach(() => {
    nock.cleanAll()
  })

  afterAll(() => {
    nock.enableNetConnect()
  })

  describe('upload', () => {
    const FILENAME = 'image.png'
    const file = `${__dirname}/assets/${FILENAME}`

    let callback = sinon.spy()

    beforeAll(async () => {
      const response = {
        name: FILENAME,
        referenceId: 'f598c37f-bf81-4aac-9116-35f64a8614e0',
      }

      scope
        .post('/attachments')
        .reply(200, response)

      await attachmentController.upload(file, callback)
    })

    afterAll(() => {
      callback.resetHistory()
    })

    it('should call the API', () => {
      expect(scope).to.have.been.requested
    })

    it('should execute the callback', () => {
      expect(callback).to.have.been.called
    })
  })
})
