describe("pagina principal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    
  });

  it("abre la version español", () => {
    cy.url().should("include", "localhost");
  });

  it("abre el menu de navegacion", () => {
    cy.get(".navbar")
    .should('exist')
    .and('be.visible')
  });

  it("examina atributos de imagen", () => {
    cy.get('#imagen01')
    .should('have.attr','alt','imagen opción 1')
  });

  it("esta presente el inicio de sesión", () => {
    cy.contains('Iniciar Sesión')
    .should('have.attr','href')
    .and('include', '/login')
  });

  it("esta presente el boton de opcion A", () => {
    cy.get("a.btn").contains("opción A") // etiqueta a con la clase btn
    .should('have.class','btn btn-primary') 
  });
});
