describe('Página principal', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('Abre la pagina principal', () => {
        cy.url().should('include', 'localhost')
    })


    it('examina el menú de navegación', () => {
        cy.get('.navbar')
    })

    it('examina atributos de imagen', () => {
        cy.get('[alt="imagen opción 1"]')
    })

    it('examina atributos de imagen', () => {
        cy.get('[alt="imagen opción 1"]')
    })

    it('Está presente el inicio de sesión', () => {
        cy.contains('Iniciar Sesión')
    })

    it('Está presente el botón de opción A', () => {
        cy.get('a.btn').contains('opción A');
    })
})