modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input__clear', function() {
    var input;
    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should hide clear elem if value is empty', function() {
        input = buildInput('');
        isClearElemVisible(input).should.be.false;
    });

    it('should show clear elem if value is not empty', function() {
        input = buildInput('bla');
        isClearElemVisible(input).should.be.true;
    });

    it('should change clear elem visibility according to value', function() {
        input = buildInput('');
        input.val('bla');
        isClearElemVisible(input).should.be.true;
        input.val('');
        isClearElemVisible(input).should.be.false;
    });
});

function buildInput(val) {
    return DOM.init(
            $(BEMHTML.apply({
                block: 'input',
                content: [{ elem: 'control' }],
                value: val
            })))
        .appendTo('body')
        .bem('input');
}

function isClearElemVisible(input) {
    return input.hasMod(input.elem('clear'), 'visibility', 'visible');
}

provide();

});