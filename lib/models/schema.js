import filter from 'uber-json-schema-filter'
import { JSV } from 'JSV'

const env = JSV.createEnvironment()

class Schema {
  static filter (data) {
    return filter(this.schema, data)
  }

  static validate (data) {
    return env.validate(data, this.schema).errors.length === 0
  }
}

export default Schema
