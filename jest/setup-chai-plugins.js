import chai from 'chai'
import sinonChai from 'sinon-chai'
import nockChai from 'chai-nock'
import chaiJestDiff from 'chai-jest-diff'
import chaiJsonSchema from 'chai-json-schema-ajv'

chai.use(sinonChai)
chai.use(nockChai)
chai.use(chaiJestDiff())
chai.use(chaiJsonSchema)
