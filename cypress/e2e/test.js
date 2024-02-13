/// <reference types= "cypress" /> 
describe('signup and signin ', () => {
    it('signup and signin with a random email', () => {

        let emailtosignin;

        function generateRandomEmail() {

            const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]
            const randomdomains = domains[Math.floor(Math.random() * domains.length)]


        const usernamelenght = Math.floor(Math.random() * 10) + 5;
        let username = "";
        let charcters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_"
        for ( let i = 0; i < usernamelenght; i++) {
            username += charcters.charAt(Math.floor(Math.random() * charcters.length))
        }
        return username + "@" + randomdomains
    }

        const randomemail = generateRandomEmail();
        console.log(randomemail)

        const firstname = ["yasoo", "asoom", "sara"]
        const lastname = ["alhazaimeh", "sawalmeh", "barahmeh"]
        let randomindex = Math.floor(Math.random() * 3)

        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('div[class="panel header"]').contains("Create an Account").click()
        cy.get("#firstname").type(firstname[randomindex])
        cy.get("#lastname").type(lastname[randomindex])
        cy.get("#email_address").type(randomemail)
        cy.get("#password").type("yasoo12345@")
        cy.get("#password-confirmation").type("yasoo12345@")
        cy.get('button[type="submit"]').contains("Create an Account").click()

        emailtosignin=randomemail
    cy.visit("https://magento.softwaretestingboard.com/customer/account/logout")

    
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(emailtosignin)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("yasoo12345@")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()

       
   
    });
});
