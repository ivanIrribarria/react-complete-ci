describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('get all home Page Elements', () => {
        cy.get('#logo')
        cy.get('.info').should('have.text', 'Edit src/App.js and save to reload.')
        cy.get('.App-link').should('have.text', 'Learn React')
    })
})