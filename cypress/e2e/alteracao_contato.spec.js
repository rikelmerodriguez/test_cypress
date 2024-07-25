describe('Alteração de Contato', () => {
    it('Deve permitir a alteração de um contato existente', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('[data-testid="contato-list"]').contains('João Silva').click();
      cy.get('[data-testid="input-nome"]').clear().type('João Pedro');
      cy.get('[data-testid="btn-salvar"]').click();
      cy.get('[data-testid="contato-list"]').should('contain', 'João Pedro');
    });
  });
  