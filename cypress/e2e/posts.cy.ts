// <referece types="cypress" />

describe(
  'Posts', () => {
    it(
      'should display the title', () => {
        cy.visit('/posts')

        cy.get('h2').should(
          'contain', 'Posts'
        )
      }
    )

    it(
      'should display a list of posts', () => {
        cy.visit('/posts')

        cy.get('ul').should(
          'have.length.at.least', 3        
        )
      }
    )
  }
)

export {}