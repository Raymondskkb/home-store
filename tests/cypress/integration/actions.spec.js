describe('e-commerce site tests',()=>{
    it('Load URL',()=>{
        cy.visit('http://127.0.0.1:5000/');
    });
    it('Register New user',()=>{
        cy.get('#signInButton > a').click();
        //click register link to load register page
        cy.get('body > form > a').click();
        cy.go('back');
        cy.go('back')

    });   

    it.skip('Return to Home page',()=>{
        //cy.go('back');
        cy.get('body > div.display > div.displayCategory > h2').should('exist'); //not advised to be this way
        cy.get('body > div.display > div.displayCategory > h2').should('have.text','Shop by Category: ');  //asset value should be exact

    });

});