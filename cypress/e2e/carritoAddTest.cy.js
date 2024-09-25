describe('Agregar álbum al carrito', () => {
    it('Debe agregar un álbum al carrito y actualizar el contador', () => {
      cy.visit('index.html');
  
      // Agregar un álbum al carrito
      cy.get('.btn-success', {timeout:4000}).first().click();
  
      // Verificar el contador del carrito
      cy.get('#elemCarrito').should('contain', '(1)');
  
      // Verificar que el precio se actualiza
      cy.get('#precio').should('contain', 'Precio: $');
    });
  });
  