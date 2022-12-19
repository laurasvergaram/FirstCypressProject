import { LandingPage } from '../page-object/LandingPage.js'
describe('empty spec', () => {

  const addToCartButtonLocator = '.col-sm-12 > .btn'
  const firstProductNameLocator = '.success > :nth-child(2)'
  const expectedText = 'Samsung galaxy s6'
  const cartButtonLocator ='#cartur'


  it('passes', () => {

    const home = new LandingPage()

    home.visitPage()
    home.clickSamsungGalaxyS6()

    cy.get(addToCartButtonLocator).click()
    cy.get(cartButtonLocator).click()
    cy.get(firstProductNameLocator).should('have.text',expectedText)

  })
})