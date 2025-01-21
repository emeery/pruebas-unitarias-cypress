describe('Página principal', () => {

    it('Abre la pagina principal', () => {
        cy.visit('http://localhost:5173/');
        cy.url().should('include', 'localhost')
    })


    it('examina el menú de navegación', () => {
        cy.visit('http://localhost:5173/');
        cy.get('.navbar')
    })

})