describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // cy.get('#nameofuser').should('have.text','Welcome user232')

    // TIENE 4 ELEMENTOS EN ESE GRUPO
    // cy.get(':nth-child(1) > .card > .card-block > h5').should('have.text','$360')
    // cy.get('.list-group a').should('have.length',4)

    // CAMBIA LA URL AL CAMBIAR DE VENTANA
    // cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    // cy.url().should('equal','https://www.demoblaze.com/prod.html?idp_=1')

    // CAMBIA LA URL AL CAMBIAR DE VENTANA FUNCION FLECHA
    // cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    // cy.url().then((url)=>{expect(url).equal('https://www.demoblaze.com/prod.html?idp_=1')}) 
    
    // TDD VALIDAR SI EL TEXTO ES IGUAL
    // cy.get('.name').then((element)=>{
    //   expect(element).to.have.text('Samsung galaxy s6')
    //   expect(element).to.have.length(1)
    //  })
    // cy.get('#nameofuser').should((nameofuser)=>{
    //   expect(nameofuser).to.have.text('Welcome user232')
    // })

    // EJEMPLO CONTAINS
    // cy.get('#logout2').contains('Log')
    
    

  })
})