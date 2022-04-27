describe("display the modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("open modal", () => {
    cy.get('[data-cy="removeMessage"]').click();
    cy.get('[data-cy="modal"]').should("be.visible");
  });

  it("close modal", () => {
    cy.get('[data-cy="removeMessage"]').click();
    cy.get('[data-cy="cancel"]').click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
});
