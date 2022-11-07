const { testCases } = require('./detect.test-case')
const { libTextFavicon } = require('.')
const { expect } = require('chai')

exports.test = async () => {
  expect(libTextFavicon).to.be.ok

  let { detectShouldApply } = libTextFavicon
  expect(detectShouldApply).to.be.a('function')

  testCases.forEach(item => {
    expect(detectShouldApply(item.userAgent)).to.be.equal(
      item.shouldApply,
      item.type
    )
  })
}
