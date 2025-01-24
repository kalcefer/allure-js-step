import { attachment, issue, label, link, step, tms } from "allure-js-commons"

it("sample test", () => {
  cy.visit("/")
  cy.log("before")
  cy.wait(200)
  cy.clearLocalStorage();
  cy.wait(200)
  cy.log("after")
})
