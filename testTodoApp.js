var expect = require('chai').expect;
var chai = require('chai')
expect.use(require('chai-dom').use)

var addTodoToList = require("./todoApp.js").addTodoToList;
var getTodoList = require("./todoApp.js").getTodoList;
var foo = require('./todoApp.js').foo;

describe('addTodoToList', function() {
  it('should return a arry', function() {
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
