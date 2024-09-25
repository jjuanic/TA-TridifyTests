describe('Notificaciones al agregar y eliminar álbumes', () => {
    it('Debe mostrar notificación al agregar un álbum', () => {
      cy.visit('index.html');
  
      cy.get('.btn-success').first().click();
  
      // Verificar que la notificación de éxito aparece
      cy.get('.swal2-container').should('be.visible').and('contain', 'Álbum agregado');
    });
  
    it('Debe mostrar notificación al eliminar un álbum', () => {
      cy.visit('index.html');
  
      // Agregar un álbum primero
      cy.get('.btn-success').first().click();
  
      // Eliminar el álbum
      cy.get('.botonEliminarAlbum').first().click();
  
      // Verificar que la notificación de éxito al eliminar aparece
      cy.get('.swal2-container').should('be.visible').and('contain', 'Álbum eliminado');
    });
  });
  