describe('Test MoviesHub app', function() {
  beforeEach(function () {
    cy.visit('/')
    cy.get('.header-name').should('contain', 'netflixroulette');
    cy.get('.movie-list-element').should('have.length', 0);
  })

  it('search successfull on press Enter, open movie detail and return on serch page', function() {
    cy.get('.search-field-input').type('dra').type ('{enter}');
    cy.get('.movie-list-element').should('have.length', 10);
    cy.get('.movie-card').first().click();
    cy.get('.movie-detail').should('have.length', 1);
    cy.get('.search-button').click();
    cy.get('.movie-detail').should('have.length', 0);
    cy.get('.search-component').should('have.length', 1);
  })

  it('search on click Search button, show not found message and if clear input return to init state', function() {
    cy.get('.search-field-input').type('dra');
    cy.get('.search-button').click();
    cy.get('.movie-list-element').should('have.length', 10);
    cy.get('.search-field-input').type('ddd');
    cy.get('.search-button').click();
    cy.get('.movie-list-element').should('have.length', 0);
    cy.get('.message-text').should('have.length', 1);
    cy.get('.message-text').should('contain', 'No films found');
    cy.get('.search-field-input').clear().type ('{enter}');
    cy.get('.movie-list-element').should('have.length', 0);
    cy.get('.message-text').should('have.length', 0);
  })
})