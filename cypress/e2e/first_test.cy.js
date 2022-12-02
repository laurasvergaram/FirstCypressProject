describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('have.text','Welcome user232')

  })
})