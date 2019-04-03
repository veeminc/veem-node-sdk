import CONFIG from '../config'
import VeemSDK from 'VeemSDK'
import Attachment from 'models/Attachment'
import fs from 'fs'
import { spy } from 'sinon'
import { file } from 'chai-files'
import rimraf from 'rimraf'

const TEMP_ASSETS_DIRECTORY = `${__dirname}/.tmp`

describe('attachment', () => {
  const veemSDK = new VeemSDK(CONFIG)

  beforeAll(async () => {
    await fs.mkdir(TEMP_ASSETS_DIRECTORY, { recursive: true })
  })

  afterAll(() => {
    rimraf.sync(TEMP_ASSETS_DIRECTORY)
  })

  describe('attachment.upload', () => {
    const callback = spy()
    const uploadAttachmentBuffer = fs.createReadStream(`${__dirname}/assets/upload.png`)

    let responseBody

    beforeAll(async () => {
      responseBody = await veemSDK.attachment.upload(uploadAttachmentBuffer, callback)
    })

    it('should return a Attachment model', () => {
      const isPaymentResponseModelValid = Attachment.response.validate(responseBody)

      expect(isPaymentResponseModelValid).to.be.true
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })

  describe('attachment.download', () => {
    const callback = spy()
    const expectedDownloadAttachmentFilePath = `${__dirname}/assets/download.png`
    const actualDownloadedAttachmentPath = `${TEMP_ASSETS_DIRECTORY}/attachment-assertion.png`
    const downloadAttachmentBuffer = fs.createReadStream(expectedDownloadAttachmentFilePath)
    let responseBody

    beforeAll(async () => {
      const attachment = await veemSDK.attachment.upload(downloadAttachmentBuffer)
      responseBody = await veemSDK.attachment.download(attachment, callback)

      fs.writeFileSync(actualDownloadedAttachmentPath, responseBody)
    })

    it('should return the same file as what was uploaded', () => {
      expect(file(actualDownloadedAttachmentPath)).to.exist
      expect(file(actualDownloadedAttachmentPath)).to.equal(file(expectedDownloadAttachmentFilePath))
    })

    it('should have invoked the callback', () => {
      expect(callback).to.have.been.calledOnce
    })
  })
})
