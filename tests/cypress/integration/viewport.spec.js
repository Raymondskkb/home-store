describe('view port / screen sizes',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.url().should('contain','http://127.0.0.1:5000/')
    });
    after(()=>{
        cy.viewport(1250,750)
    });

    context('cy.viewport() - set the viewport size and dimension', () => {
        // https://on.cypress.io/viewport
    
        // cy.get('#navbar').should('be.visible')
        // cy.viewport(320, 480)
    
        // // the navbar should have collapse since our screen is smaller
        // cy.get('#navbar').should('not.be.visible')
        // cy.get('.navbar-toggle').should('be.visible').click()
        // cy.get('.nav').find('a').should('be.visible')
        it('super large screen',()=>{
            // lets see what our app looks like on a super large screen
            cy.viewport(2999, 2999)
        });
        
    
        // cy.viewport() accepts a set of preset sizes
        // to easily set the screen to a device's width and height
    
        // We added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)
        it('macbook-15 view',()=>{
            cy.viewport('macbook-15')
            cy.wait(200)
        });
        
        it('macbook-13 view',()=>{
            cy.viewport('macbook-13')
            cy.wait(200)
        });
        it('macbook-11 view',()=>{
            cy.viewport('macbook-11')
            cy.wait(200)
        });
        
        it('ipad-2 view',()=>{
            cy.viewport('ipad-2')
            cy.wait(200)
        });
        
        it('ipad-mini view',()=>{
            cy.viewport('ipad-mini')
            cy.wait(200)
        });

        it('iphone-6+',()=>{
            cy.viewport('iphone-6+')
            cy.wait(200)
        });

        it('iphone-6',()=>{
            cy.viewport('iphone-6')
            cy.wait(200)
        });

        it('iphone-5',()=>{
            cy.viewport('iphone-5')
            cy.wait(200)
        });

        it('iphone 4',()=>{
            cy.viewport('iphone-3')
            cy.wait(200)
        });

        it('iphone-3',()=>{
            cy.viewport('iphone-3')
            cy.wait(200)
        });

        it('Orientation',()=>{
        // cy.viewport() accepts an orientation for all presets
        // the default orientation is 'portrait'
           cy.viewport('ipad-2', 'portrait')
           cy.wait(200)
           cy.viewport('iphone-4', 'landscape')
           cy.wait(200)
        });

    
        // The viewport will be reset back to the default dimensions
        // in between tests (the  default can be set in cypress.json)
      });
});

