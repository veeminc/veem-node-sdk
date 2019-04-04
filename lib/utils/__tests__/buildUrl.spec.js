import buildUrl from '../buildUrl'

describe('buildUrl', () => {
  const BASE_PATH = 'sandbox-api.veem.com'

  it('should generate a full URL based on the base URL environment', () => {
    const url = buildUrl(BASE_PATH, '/test')

    expect(url).to.equal(`https://${BASE_PATH}/test`)
  })

  it('should generate a full URL with double slashes cleaned out', () => {
    const url = buildUrl(BASE_PATH, '//test//')

    expect(url).to.equal(`https://${BASE_PATH}/test`)
  })
})
