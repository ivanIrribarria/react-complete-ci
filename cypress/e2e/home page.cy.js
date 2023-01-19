import items from "../../src/fixtures/global";


describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('get all home Page Elements', () => {
        cy.getBySelId('header-title').contains(items.appName)
    })
})