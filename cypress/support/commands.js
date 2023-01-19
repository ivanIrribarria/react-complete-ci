// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelLike', (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelId', (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('getBySelLikeId', (selector, ...args) => {
    return cy.get(`[data-testid*=${selector}]`, ...args)
})