import { attachment, issue, label, link, step, tms } from "allure-js-commons";
import * as allure from "allure-js-commons";

it("sample test", () => {
  cy.visit("/");
  allure.step("MAIN STEP", () => {
    allure.step("SUB STEP 1", () => {
      cy.log("before");
      cy.wait(200);
    });
    allure.step("SUB STEP 2", () => {
      cy.clearLocalStorage();
    });
    cy.wait(200);
    allure.step("SUB STEP 3", () => {
      cy.reload();
    });
    allure.step("SUB STEP 4", () => {
      cy.log("after");
    });
  });
});
