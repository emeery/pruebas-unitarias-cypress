describe('Register Form', () => {
    beforeEach(() => {
        cy.visit(' http://localhost:5173/register');
    });

    it('debe mostrar error si el nombre es menor de 3 caracteres', () => {
        cy.get('input[name="name"]').type('Jo');
        cy.get('form').submit();
        cy.get('div.text-danger').should('contain', 'El nombre debe tener al menos 3 caracteres');
    });

});