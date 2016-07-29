import * as domToolkit from '../src/index'

describe('test dom toolkit', function () {
  let el
  beforeEach(function () {
    el = document.createElement('div')
    el.id = 'app'
    document.body.appendChild(el)
  })

  afterEach(function () {
    el.parentElement.removeChild(el)
  })

  it('query ok', function () {
    const app = domToolkit.query('#app')
    expect(app.id).to.equal('app')
  })
  it('query fail', function () {
    const app1 = domToolkit.query('#app1')
    expect(app1).to.be.a('null')
  })
})
