const { testCases } = require('./detect.test-case')
const libAutoFavicon = require('.')
const { expect } = require('chai')

exports.test = async () => {
  expect(libAutoFavicon).to.be.ok

  let { detectShouldApply } = libAutoFavicon
  expect(detectShouldApply).to.be.a('function')

  testCases.forEach(item => {
    expect(detectShouldApply(item.userAgent)).to.be.equal(
      item.shouldApply,
      item.type
    )
  })
}
