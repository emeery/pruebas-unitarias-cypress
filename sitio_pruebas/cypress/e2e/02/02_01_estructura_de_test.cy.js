describe('Página principal', () => {

    it('Abre la versión en español', () => {
        cy.visit('http://localhost:5173/');
        cy.url().should('include', 'localhost')
    })

})
