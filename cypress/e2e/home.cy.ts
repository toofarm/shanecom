// <referece types="cypress" />

describe(
  'Home', () => {
    it(
      'should display the title', () => {
        cy.visit('/')

        cy.get('h1').should(
          'contain', 'Welcome to Home!'
        )
      }
    )
  }
)