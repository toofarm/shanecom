/* eslint-disable max-len */
describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('renders our headline', () => {
    cy.contains('Hi there, my name\'s Shane')
  })

  it('renders our intro paragraph', () => {
    cy.contains('I\'m a software engineer who focuses on front-end development. Right now, I work as a full stack dev for Theo Agency in Portland, Oregon.')
  })

})