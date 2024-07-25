describe('Remoção de Contato', () => {
    it('Deve permitir a remoção de um contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('[data-testid="contato-list"]').contains('João Pedro').find('[data-testid="btn-remover"]').click();
      cy.get('[data-testid="contato-list"]').should('not.contain', 'João Pedro');
    });
  });
  