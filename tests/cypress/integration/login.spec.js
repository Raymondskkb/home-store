//have an import for the usernames and password as env variables
const password = Cypress.env.password;
const username = Cypress.env.userName;
describe('Login Scenarios',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.url().should('contain','http://127.0.0.1:5000/')
    });
    // after(()=>{
    //     //return to homepage after all tests
    //     cy.visit('http://127.0.0.1:5000/');
    //     cy.url().should('contain','/')  //link to the home page
    // });

    it('Login with registered user',()=>{

        cy.get('#signInButton > .link').click();
        cy.get(':nth-child(1) > input').type('username');
        cy.get(':nth-child(2) > input').type('password'); //{log:false}  to hide input fom the logs
        cy.get(':nth-child(3) > input').click();
    }); 

    it('Login with unregistered user',()=>{
        cy.visit('/');
    }); 
    it('Login with valid username and invalid password',()=>{
        cy.visit('/');
    }); 
    it('Login with valid password and invalid username',()=>{
        cy.visit('/');
    }); 
    it('Login with empty input fields',()=>{
        cy.visit('http://127.0.0.1:5000/');
    }); 
});