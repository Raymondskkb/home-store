describe('Category navigations',()=>{
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5000/');
    });
    after(()=>{
        //return to homepage after all tests
        cy.visit('http://127.0.0.1:5000/');
        cy.url().should('contain','/')  //link to the home page
    });


    it("select Men's category",()=>{
        cy.get('[href="/displayCategory?categoryId=1"]').click();
        //assertion
        cy.get('h2')
        .should('have.text','Showing all products of Category Men:')
    });
    it("select Women's category",()=>{
        cy.get('[href="/displayCategory?categoryId=2"]').click();
        cy.get('h2')
        .should('have.text','Showing all products of Category Women:')
    });
    it("select TV category",()=>{
        cy.get('[href="/displayCategory?categoryId=3"]').click();
        cy.get('h2')
        .should('have.text','Showing all products of Category TVs:')
    });
    it("select Computers category",()=>{
        cy.get('[href="/displayCategory?categoryId=4"]').click();
        cy.get('h2')
        .should('have.text','Showing all products of Category Computers:')
    });
});