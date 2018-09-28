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


describe('HTML Document', () => {

  describe('defines', () => {

    it('document.documentElement', () => {
      assert(document.documentElement);
      assert(document.documentElement.tagName, 'HTML');
    });

    it('document.body', () => {
      assert(document.body);
      assert(document.body.tagName, 'BODY');
    });
  })

  describe('=> createElement()', () => {

    it('creates an element', () => {

      // when
      const div = document.createElement('div');

      // then
      assert(div instanceof Element);
      assert.equal(div.tagName, 'DIV');
      assert.deepEqual(div.dataset, {});
      assert(Object.keys(div.style).includes('color'));
      assert(Object.keys(div.style).includes('backgroundColor'));
      assert.deepEqual(Array.from(div.childNodes), []);
    });
  });

  describe('=> createComment()', () => {

    it('creates a comment', () => {

      // when
      const comment = document.createComment('comment');

      // then
      assert(comment instanceof Comment);
      assert.deepEqual(comment.textContent, 'comment');
    });
  });

  describe('=> createTextNode()', () => {

    it('creates a text node', () => {

      // when
      const text = document.createTextNode('text node');

      // then
      assert(text instanceof Text);
      assert.equal(text.textContent, 'text node');
    });
  });

  describe('=> createAttribute()', () => {

    it('creates an attribute', () => {

      // when
      const attr = document.createAttribute('value');

      // then
      assert(attr instanceof Attr);
      assert.equal(attr.name, 'value');
      assert.equal(attr.value, '');
    });
  });
});



describe('Attr', () => {

  it('has empty string value by default', () => {

    // given
    const attr = document.createAttribute('name');

    // then
    assert.equal(attr.name, 'name');
    assert.equal(attr.value, '');
  });

  it('converts given value to a string', () => {

    // given
    const attr = document.createAttribute('value');

    // when
    attr.value = 5;

    // then
    assert.equal(attr.name, 'value');
    assert.equal(attr.value, '5');
  });

  it('allows to set an arbitrary property', () => {

    // given
    const attr = document.createAttribute('value');

    // when
    attr.anything = 666;

    // then
    assert.equal(attr.name, 'value');
    assert.equal(attr.anything, 666);
  });
});
