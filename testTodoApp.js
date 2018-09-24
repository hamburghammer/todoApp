import addTodoToList from "todoApp.js";

var expect = require('chai').expect;

describe('addTodoToList', function() {
  it('should return a arry', function() {
    var todoList = require('./todoApp.js');
    expect(todoList).to.not.be.undefined;
  });
});
