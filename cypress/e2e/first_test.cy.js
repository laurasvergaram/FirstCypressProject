describe('clases', () => {
  it('User Logged in', () =>{

    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('have.text','Welcome user232')
        // EJEMPLO CONTAINS
    cy.get('#logout2').contains('Log')
        // TDD USER
    // cy.get('#nameofuser').should((nameofuser)=>{
    //   expect(nameofuser).to.have.text('Welcome user232')

  })

  it('Price & list length ok', () =>{

    //PRECIO Y 4 ELEMENTOS EN ESE GRUPO
    cy.get(':nth-child(1) > .card > .card-block > h5').should('have.text','$360')
    cy.get('.list-group a').should('have.length',4)

  })

  it('Changed page', () =>{

    // CAMBIA LA URL AL CAMBIAR DE VENTANA NORMAL
    // cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    // cy.url().should('equal','https://www.demoblaze.com/prod.html?idp_=1')

    // CAMBIA LA URL AL CAMBIAR DE VENTANA FUNCION FLECHA
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.url().then((url)=>{expect(url).equal('https://www.demoblaze.com/prod.html?idp_=1')}) 
  })

  it('Text is ok', () =>{

    // TDD VALIDAR SI EL TEXTO ES IGUAL
    cy.get('.name').then((element)=>{
      expect(element).to.have.text('Samsung galaxy s6')
      expect(element).to.have.length(1)
     })

  })

  
  
  it('it works', () => {

    // cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu')
    cy.request(
      {
        url:'https://petstore.swagger.io/v2/13',
        method: 'DELETE',
        headers:{api_key:1000},
        failOnStatusCode: false,
      }
    )







    



    
    

  })
})