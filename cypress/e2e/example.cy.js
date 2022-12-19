describe('test filtering', () =>{

    const landingPageUrl = 'https://www.demoblaze.com/'
    const filterByPhoneLocator = '[onclick="byCat(\'phone\')"]'
    const elementsArrayLocator = '.card > .card-block > .card-title'
    const expectedResult = ['Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9']
    

    function textOfAll(elements){
        return Cypress.$.map(elements,(value,index)=>
            value.innerText
        )
    }

    it('filter by phones', () =>{

        cy.visit(landingPageUrl)
        cy.get(filterByPhoneLocator).click()
        cy.get(elementsArrayLocator).should('have.length',7)
        cy.get(elementsArrayLocator).then((elements)=>{
            expect(textOfAll(elements)).to.have.all.members(expectedResult)
        })


    })



})
