/// <reference types="cypress"/>

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(2)
            .contains('Apollo Running Short')
            .click()

            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });
});