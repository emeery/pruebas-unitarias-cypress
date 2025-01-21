describe('Register Form', () => {
    beforeEach(() => {
        cy.visit(' http://localhost:5173/register');
    });

    it('debe mostrar error si el nombre es menor de 3 caracteres', () => {
        cy.get('input[name="name"]').type('Jo');
        cy.get('form').submit();
        cy.get('div.text-danger').should('contain', 'El nombre debe tener al menos 3 caracteres');
    });

    it('no debe mostrar error si el nombre es mayor de 4 caracteres', () => {
        cy.get('input[name="name"]').type('John');
        cy.get('form').submit();
        cy.get('form :nth-child(1) > .text-danger').should('not.exist');
    });

    it('debe mostrar un mensaje de error si los passwords no coinciden', () => {
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="confirmPassword"]').type('password321');
        cy.get('form').submit();
        cy.get('div.text-danger').should('contain', 'Las contraseñas no coinciden');
    });

});