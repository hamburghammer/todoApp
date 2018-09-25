var addTodoToList = require("./todoApp.js").addTodoToList;
var getTodoList = require("./todoApp.js").getTodoList;
var foo = require('./todoApp.js').foo;
var expect = require('chai').expect;

describe('addTodoToList', function() {
  it('should return a arry', function() {
    var exampleList = [];
    expect(getTodoList().length).to.equal(0);
    addTodoToList("foo");
    expect(getTodoList().length).to.equal(1);
  });
});

describe('foo', function() {
  it('return foo', function() {
    expect(foo("foo")).to.equal("foo");
  });
});
