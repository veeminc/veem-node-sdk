import nock from 'nock'
import sinon from 'sinon'
import AttachmentController from '../attachment'
import ApiClient from 'utils/api-client'

describe('Attachment Controller', () => {
  const FILENAME = 'image.png'
  const REFERENCE_ID = 'f598c37f-bf81-4aac-9116-35f64a8614e0'

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
    const file = `${__dirname}/assets/${FILENAME}`

    let callback = sinon.spy()

    beforeAll(async () => {
      const response = {
        name: FILENAME,
        referenceId: REFERENCE_ID,
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

  describe('download', () => {
    const file = `${__dirname}/assets/${FILENAME}`
    const buffer = Buffer.from(file)

    const attachment = {
      name: FILENAME,
      referenceId: REFERENCE_ID,
    }

    let callback = sinon.spy()

    beforeAll(async () => {
      scope
        .get('/attachments')
        .query({
          name: attachment.name,
          referenceId: attachment.referenceId,
        })
        .reply(200, buffer)

      await attachmentController.download(attachment, callback)
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
