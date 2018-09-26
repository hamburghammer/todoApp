var expect = require('chai').expect;
var assert = require('chai').assert;
require('dom-test');

var todoApp = "../todoApp.js";

var addTodoToList = require(todoApp).addTodoToList;
var getTodoList = require(todoApp).getTodoList;
var foo = require(todoApp).foo;
//var localStorage = require('./todoApp.js').localStorage;

describe('todoList', function() {
  it('should return a arry', function() {
    expect(getTodoList().length).to.equal(0);
    addTodoToList("foo");
    expect(getTodoList().length).to.equal(1);
    expect(getTodoList()).to.deep.equal([{completed: false, todoText: "foo"}])
  });
});

describe('foo', function() {
  it('return foo', function() {
    expect(foo("foo")).to.equal("foo");
  });
});
