describe('Eliminar álbum del carrito', () => {
    it('Debe eliminar un álbum del carrito y actualizar el contador y el precio', () => {
      cy.visit('index.html');
  
      // Simular que un álbum está en el carrito
      localStorage.setItem('carrito', JSON.stringify([{ collectionId: 1, collectionName: 'Album Test', collectionPrice: 10 }]));
      
      cy.reload(); // Recargar la página para aplicar los cambios en localStorage
  
      // Eliminar el álbum del carrito
      cy.get('.btn-danger').first().click();

        // Cerrar la alerta
      cy.get('.swal2-confirm').click();
  
         // Verificar que el carrito está vacío
      cy.get('#elemCarrito', { timeout: 3000 }).should('contain', '0');
    });
  });
  