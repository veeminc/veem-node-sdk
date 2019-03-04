import chai from 'chai'
import sinonChai from 'sinon-chai'
import nockChai from 'chai-nock'
import chaiJestDiff from 'chai-jest-diff'

chai.use(sinonChai)
chai.use(nockChai)
chai.use(chaiJestDiff())
