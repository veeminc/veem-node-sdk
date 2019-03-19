import nock from 'nock'
import sinon from 'sinon'
import AttachmentController from '../attachment'
import ApiClient from 'utils/api-client'

describe('Attachment Controller', () => {
  const FILENAME = 'image.png'
  const FILE_PATH = `${__dirname}/assets/${FILENAME}`
  const REFERENCE_ID = 'f598c37f-bf81-4aac-9116-35f64a8614e0'

  const ATTACHMENT = {
    name: FILENAME,
    referenceId: REFERENCE_ID,
  }

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
    let callback = sinon.spy()

    beforeAll(async () => {
      scope
        .post('/attachments')
        .reply(200, ATTACHMENT)

      await attachmentController.upload(FILE_PATH, callback)
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
    const buffer = Buffer.from(FILE_PATH)

    let callback = sinon.spy()

    beforeAll(async () => {
      scope
        .get('/attachments')
        .query({
          name: ATTACHMENT.name,
          referenceId: ATTACHMENT.referenceId,
        })
        .reply(200, buffer)

      await attachmentController.download(ATTACHMENT, callback)
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
