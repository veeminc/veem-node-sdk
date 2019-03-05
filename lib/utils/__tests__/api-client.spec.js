import ApiClient from '../api-client'

describe('ApiClient', () => {
  describe('buildUrl', () => {
    let apiClient

    beforeAll(() => {
      apiClient = new ApiClient()
    })

    it('should generate a full URL based on the base URL environment', () => {
      const url = apiClient.buildUrl('/test')

      expect(url).to.equal('https://sandbox-api.veem.com/test')
    })

    it('should generate a full URL with double slashes cleaned out', () => {
      const url = apiClient.buildUrl('//test//')

      expect(url).to.equal('https://sandbox-api.veem.com/test')
    })
  })

  describe('call', () => {

  })
})
