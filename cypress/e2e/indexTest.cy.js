describe('Verificar la carga de la página', () => {
  it('Debe mostrar el logo y el título correctamente', () => {
    cy.visit('index.html');
    
    // Verificar el título de la página
    cy.title().should('include', 'Tridify');

    // Verificar que el logo se muestre correctamente
    cy.get('img.logoNav').should('be.visible').and('have.attr', 'src', './assets/images/logo.png');
  });
});
