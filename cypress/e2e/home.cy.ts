// <referece types="cypress" />

describe(
  'Home', () => {
    it(
      'should display the title', () => {
        cy.visit('/')

        cy.get('h1').should(
          'contain', 'Hi there, my name\'s Shane'
        )
      }
    )

    it(
      'should display a list of recent posts', () => {
        cy.visit('/')

        cy.get('h2').should(
          'contain', 'Recent Posts'
        )

        cy.get('ul').should(
          'have.length.at.least', 1
        )
      }
    )

    it(
      'should display a list of recent projects', () => {
        cy.visit('/')

        cy.get('h2').should(
          'contain', 'Recent Projects'
        )

        cy.get('ul').should(
          'have.length.at.least', 1
        )
      }
    )
  }
)

export {}