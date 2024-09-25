describe('Función de búsqueda', () => {
    it('Debe permitir buscar y redirigir a la página de resultados', () => {
      cy.visit('index.html');
  
      // Escribir en el input de búsqueda
      cy.get('#busquedaInput').type('The Beatles');
      
      // Hacer click en el botón de búsqueda
      cy.get('#buscarButton').click();
      
      // Verificar que se guarda la búsqueda en localStorage
      cy.window().then((window) => {
        expect(window.localStorage.getItem('busqueda')).to.equal('The Beatles');
      });
  
      // Verificar redirección
      cy.url().should('include', 'busqueda.html');
    });
  });
  