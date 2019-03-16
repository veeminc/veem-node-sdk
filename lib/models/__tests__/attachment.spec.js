import Attachment from 'models/attachment'

describe('Attachment Model', () => {
  it('should match the snapshot', () => {
    expect(Attachment.schema).toMatchSnapshot()
  })

  it('should define a valid schema', () => {
    expect(Attachment.schema).to.be.validJsonSchema
  })
})
