describe('Inclusão de Contato', () => {
    it('Deve permitir a inclusão de um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
      cy.get('[data-testid="input-nome"]').type('João Silva');
      cy.get('[data-testid="input-email"]').type('joao.silva@example.com');
      cy.get('[data-testid="input-telefone"]').type('123456789');
      cy.get('[data-testid="btn-adicionar"]').click();
      cy.get('[data-testid="contato-list"]').should('contain', 'João Silva');
    });
  });
  