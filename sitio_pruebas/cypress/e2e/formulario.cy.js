describe('', () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/");
        cy.get('[href="/register"]').click();
    })

    it('debe mostrar error si el nombre es menor de 3 caracteres', () => {
        cy.get('input[name="name"]').type('Jo');
        cy.get('form').submit();
        cy.get('div.text-danger').should('contain','El nombre debe tener al menos 3 caracteres');
    });

    it('no debe mostrar el error si el nombre es mayor de 3 caracteres', () => {
        cy.get('input[name="name"]').type('Roberto Carlos');
        cy.get('form').submit();
        cy.get('form:nth-child(1) > .text-danger').should('not.exist')
    });

    it('debe mostrar un mensaje de error si los password no coinciden', () => {
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password345s');
        cy.get('form').submit();
        cy.get('div.text-danger').should('contain','Las contraseñas no coinciden')
        
    });

    it('debe mostrar un mensaje de confirmación al enviar los datos', () => {
        cy.get('input[name="name"]').type('Neymar da Silva');
        cy.get('input[name="email"]').type('jerry@live.com');
        cy.get('input[name="phone"]').type('555-2233');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('form').submit();
        cy.contains('Gracias por registrarte').should('be.visible').and('contain','jerry@live.com')
        
    });

    it('verifica que se envien los datos y metodo correcto', () => {
        cy.intercept('POST', 'api/registro', (req) => {
            expect(req.body).to.include({
                name: 'Neymar da Silva',
                email: 'neymar@live.com',
                phone: '555-2233',
                password: 'password123',
                confirmPassword: 'password123'
            })
        }).as('registerRequest') // nombre que se le asigna

        cy.get('input[name="name"]').type('Neymar da Silva');
        cy.get('input[name="email"]').type('neymar@live.com');
        cy.get('input[name="phone"]').type('555-2233');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password123');
        cy.get('form').submit();

        cy.wait('@registerRequest');
    });
});