



import React from 'react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  beforeEach(() => {
    cy.mount(<TodoList />);
  });

  it('renders the TodoList component', () => {
    cy.get('h2').should('contain', 'To-Do List');
    cy.get('[data-id="task-input"]').should('exist');
    cy.get('[data-id="add-task-btn"]').should('exist');
    cy.get('[data-id="task-list"]').should('exist');
  });

  it('allows typing into the input field', () => {
    cy.get('[data-id="task-input"]').type('Buy groceries').should('have.value', 'Buy groceries');
  });

  it('adds a new task when the Add Task button is clicked', () => {
    cy.get('[data-id="task-input"]').type('Buy groceries');
    cy.get('[data-id="add-task-btn"]').click();
    cy.get('[data-id="task-list"]').should('contain', 'Buy groceries');
  });

  it('clears the input field after adding a task', () => {
    cy.get('[data-id="task-input"]').type('Walk the dog');
    cy.get('[data-id="add-task-btn"]').click();
    cy.get('[data-id="task-input"]').should('have.value', '');
  });

  it('removes a task when the remove button is clicked', () => {
    cy.get('[data-id="task-input"]').type('Read a book');
    cy.get('[data-id="add-task-btn"]').click();
    cy.get('[data-id="task-list"]').should('contain', 'Read a book');

    cy.get('[data-id="remove-task-0"]').click();
    cy.get('[data-id="task-list"]').should('not.contain', 'Read a book');
  });

  it('does not add empty tasks', () => {
    cy.get('[data-id="add-task-btn"]').click();
    cy.get('[data-id="task-list"]').children().should('have.length', 0);
  });

  it('allows adding and removing multiple tasks', () => {
    cy.get('[data-id="task-input"]').type('Task 1');
    cy.get('[data-id="add-task-btn"]').click();

    cy.get('[data-id="task-input"]').type('Task 2');
    cy.get('[data-id="add-task-btn"]').click();

    cy.get('[data-id="task-list"]').should('contain', 'Task 1').and('contain', 'Task 2');

    cy.get('[data-id="remove-task-0"]').click();
    cy.get('[data-id="task-list"]').should('not.contain', 'Task 1');
  });

  it('ensures tasks are displayed correctly', () => {
    const tasks = ['Finish project', 'Call mom', 'Do laundry'];

    tasks.forEach((task) => {
      cy.get('[data-id="task-input"]').type(task);
      cy.get('[data-id="add-task-btn"]').click();
    });

    tasks.forEach((task) => {
      cy.get('[data-id="task-list"]').should('contain', task);
    });
  });

  it('prevents invalid state changes (no NaN, undefined, or empty values)', () => {
    cy.get('[data-id="task-list"]').children().should('not.contain', 'undefined');
    cy.get('[data-id="task-list"]').children().should('not.contain', 'NaN');
    cy.get('[data-id="task-list"]').children().should('not.contain', '');
  });
});
