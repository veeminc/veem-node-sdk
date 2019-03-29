import chai from 'chai'
import sinonChai from 'sinon-chai'
import nockChai from 'chai-nock'
import chaiJestDiff from 'chai-jest-diff'
import chaiJsonSchema from 'chai-json-schema'
import chaiJsonSchemaAJV from 'chai-json-schema-ajv'
import chaiRequest from './plugins/chai-request'

chai.use(sinonChai)
chai.use(nockChai)
chai.use(chaiJestDiff())
chai.use(chaiJsonSchema)
chai.use(chaiJsonSchemaAJV)
chai.use(chaiRequest)
