/* globals describe, it */

'use strict';

var morph  = require('../../index');
var expect = require('expect.js');

describe('morph-object', function () {
  it('throws an error if the passed argument is no object', function () {
    expect(function () {
      morph(1);
    }).to.throwError(
      Error, 'First argument is no object.'
    );
  });

  it('throws an error if the second passed argument is no object', function () {
    expect(function () {
      morph({}, 1);
    }).to.throwError(
      Error, 'Second argument is no object.'
    );
  });

  it('returns the first argument if no second one is passed', function () {
    var arg = { a: 1 };

    expect(morph(arg)).to.eql(arg);
  });

  it('returns the first argument if the second does not relate', function () {
    var arg = { a: 1 };

    expect(morph(arg, { b: 'c' })).to.eql(arg);
  });

  it('does not modify the original arguments', function () {
    var arg = { a: 1 };

    morph(arg, { a: 'b' });
    expect(arg).to.eql({ a: 1 });
  });

  it('changes the key of the argument copy', function () {
    expect(morph({ a: 1 }, { a: 'b' })).to.eql({ b: 1 });
  });
});
