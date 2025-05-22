describe('Todo App UI', () => {
    it('should display todos', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Add Item');
    });
});