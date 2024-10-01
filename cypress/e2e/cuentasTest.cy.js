describe('Funciones de crear cuenta e iniciar sesión', () => {
    it('Debe crear una cuenta e inciar sesión con la misma', () => {

        const emailPrueba = 'cypresstest@gmail.com';
        const contraseñaPrueba = '123123123';
        const usuarioPrueba = emailPrueba.split('@')[0];

        cy.visit('index.html');

        // Buscar y hacer click en el botón login
        cy.get('#anclaLogin')
            .click();

        // Verificamos que fuimos a la página de login
        cy.url()
            .should('include', 'login.html');

        // Buscar y hacer click en el botón registro
        cy.get('#registro')
            .click();

        // Verificamos redirección a registro.html
        cy.url()
            .should('include', 'registro.html');

        // Escribir en el input de email y escribir el mail de prueba
        cy.get('#email')
            .type(emailPrueba);

        // Escribir en el input de contraseña y escribir la contraseña de prueba
        cy.get('#contraseña')
            .type(contraseñaPrueba);

        // Buscar y hacer click en el botón registrarse
        cy.get('#registro')
            .click();

        // Verificar que la notificación de cuenta creada
        cy.get('.swal2-container')
            .should('be.visible')
            .and('contain', 'Cuenta creada!');

        // Verificar redirección a login.html
        cy.url()
            .should('include', 'login.html', { timeout: 6000 });

        // Escribir en el input de email y escribir el mail de prueba
        cy.get('#email')
            .type(emailPrueba);

        // Escribir en el input de contraseña y escribir la contraseña de prueba
        cy.get('#contraseña')
            .type(contraseñaPrueba);

        // Buscar y hacer click en el botón iniciar sesión
        cy.get('#login')
            .click();

        // Verificar que la notificación de inicio de sesión
        cy.get('.swal2-container')
            .should('be.visible')
            .and('contain', 'Inicio de sesión válido!')
            .and('contain', usuarioPrueba);

        // Verificar redirección a index.html
        cy.url()
            .should('include', 'index.html', { timeout: 6000 });
    });

    // it('Debe crear una cuenta invalida e informar al usuario', () => {
    //     cy.visit('index.html');

    //     // Escribir en el input de búsqueda
    //     cy.get('#busquedaInput').type('The Beatles');

    //     // Hacer click en el botón de búsqueda
    //     cy.get('#buscarButton').click();

    //     // Verificar que se guarda la búsqueda en localStorage
    //     cy.window().then((window) => {
    //       expect(window.localStorage.getItem('busqueda')).to.equal('The Beatles');
    //     });

    //     // Verificar redirección
    //     cy.url().should('include', 'busqueda.html');
    //   });
});
