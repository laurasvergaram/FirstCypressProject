export class landingPage{
    landingPageUrl = 'https://www.demoblaze.com/'
    SamsungLinkLocator = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'

    visitPage(){
        cy.visit(this.landingPageUrl)
    }

    clickSamsungGalaxyS6(){
        cy.get(this.SamsungLinkLocator).click()
    }


}