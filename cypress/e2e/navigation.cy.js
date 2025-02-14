describe('Sidebar Navigation', () => {
  beforeEach(() => {
      cy.visit('/');
  });

  it('should open and close the sidebar', () => {
      cy.get('[data-testid="sidebar"]').should('not.exist');
      
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="sidebar"]').should('be.visible');
      
      cy.get('[data-testid="sidebar-close"]').click();
      cy.get('[data-testid="sidebar"]').should('not.exist');
  });

  it('should close the sidebar when clicking a link', () => {
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="sidebar"]').should('be.visible');

      cy.get('[data-testid="sidebar-link-about"]').click();
      cy.get('[data-testid="sidebar"]').should('not.exist');
  });

  it('should navigate to the correct pages when clicking links', () => {
      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="sidebar-link-home"]').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/');

      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="sidebar-link-about"]').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/about');

      cy.get('[data-testid="sidebar-toggle"]').click();
      cy.get('[data-testid="sidebar-link-settings"]').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/settings');
  });
});
