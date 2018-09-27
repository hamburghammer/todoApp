var expect = require('chai').expect;
var assert = require('chai').assert;
require('dom-test');



describe('DomText', () => {

  it('uses constructor argument as text content', () => {

    // given
    const text = document.createTextNode('text');

    // then
    expect(text.textContent).equal('text');
  });

  it('converts constructor argument to string', () => {
    expect(document.createTextNode(null).textContent).equal('null');
    expect(document.createTextNode(undefined).textContent, ).equal('undefined');
    expect(document.createTextNode(10).textContent).equal('10');
  });

  it('throws an exception for symbol value', () => {

    // given
    const text = document.createTextNode('');

    // then
    assert.throws(() => {
      text.textContent = Symbol.for('invalid');
    }, TypeError, /Cannot convert a Symbol value to a string/);
  });

  it('returns #text as node name', () => {

    // given
    const text = document.createTextNode('text');

    // then
    expect(text.nodeName).equal('#text');
  });

  it('returns Node.TEXT_NODE as node type', () => {

    // given
    const text = document.createTextNode('comment');

    // then
    expect(text.nodeType).equal(Node.TEXT_NODE);
  });
});

describe('localStorage', function() {
  it('Set end Read', function() {
    localStorage.setItem("foo", "bar");
    expect(localStorage.getItem("foo")).to.equal("bar");
  })
})
