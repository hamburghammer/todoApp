var expect = require('chai').expect;
var assert = require('chai').assert;
require('dom-test');

var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('../scratch');

var todoApp = "../todoApp.js";

var addTodoToList = require(todoApp).addTodoToList;
var getTodoList = require(todoApp).getTodoList;
var foo = require(todoApp).foo;
var setLocalStorage = require('../todoApp.js').setLocalStorage;
var getLocalStorage = require('../todoApp.js').getLocalStorage;




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



describe('setLocalStorage and getLocalStorage', () =>{
  it('set localStorage as string', () =>{
    setLocalStorage(["foo", 12, "foo bar"]);
    expect(localStorage.getItem("savedTodoList")).to.equal('["foo",12,"foo bar"]');
  })
  it('get localStorage as array', () => {
    expect(getLocalStorage()).to.deep.equal(["foo", 12, "foo bar"])
  })
})
