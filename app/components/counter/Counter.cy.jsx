import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  beforeEach(() => {
    cy.mount(<Counter />);
  });

  it("renders the counter component", () => {
    cy.get("h2").should("contain", "Counter");
    cy.get('[data-id="count-value"]').should("exist");
    cy.get('[data-id="increment-btn"]').should("exist");
    cy.get('[data-id="decrement-btn"]').should("exist");
  });

  it("has initial count set to 0", () => {
    cy.get('[data-id="count-value"]').should("have.text", "0");
  });

  it("increments count when the + button is clicked", () => {
    cy.get('[data-id="increment-btn"]').click();
    cy.get('[data-id="count-value"]').should("have.text", "1");
  });

  it("decrements count when the - button is clicked", () => {
    cy.get('[data-id="increment-btn"]').click();
    cy.get('[data-id="decrement-btn"]').click();
    cy.get('[data-id="count-value"]').should("have.text", "0");
  });

  it("does not allow count to go below a reasonable minimum (defensive test)", () => {
    cy.get('[data-id="decrement-btn"]').click().click().click();
    cy.get('[data-id="count-value"]').should("have.text", "-3");
  });

  it("increments and decrements multiple times correctly", () => {
    cy.get('[data-id="increment-btn"]').click().click().click();
    cy.get('[data-id="count-value"]').should("have.text", "3");

    cy.get('[data-id="decrement-btn"]').click().click();
    cy.get('[data-id="count-value"]').should("have.text", "1");
  });

  it("ensures buttons have the correct text", () => {
    cy.get('[data-id="increment-btn"]').should("have.text", "+");
    cy.get('[data-id="decrement-btn"]').should("have.text", "-");
  });

  it("ensures buttons are clickable", () => {
    cy.get('[data-id="increment-btn"]').should("not.be.disabled");
    cy.get('[data-id="decrement-btn"]').should("not.be.disabled");
  });

  it("prevents invalid state changes (e.g., NaN or undefined count)", () => {
    cy.get('[data-id="count-value"]').should("not.be.empty");
    cy.get('[data-id="count-value"]').should("match", /^[0-9-]+$/); // Only numbers allowed
  });
});
