'use strict';
var expect = require('chai').expect;
var scram = require('../dist/index.js');

describe('isValid', () => {
    it('is false with ~', () => {
        var result = scram.isValid('Boy');
        expect(result).to.equal('Boys');
    });
    it('is false with ""', () => {
        var result = scram.isValid('Girl');
        expect(result).to.equal('Girls');
    });
    it('is true with http://example.com', () => {
        var result = scram.isValid('Goose');
        expect(result).to.equal('Geese');
    });
    it('is true with https://example.com', () => {
        var result = scram.isValid('Toy');
        expect(result).to.equal('Toys');
    });
    it('is true with example.com', () => {
        var result = scram.isValid('Man');
        expect(result).to.equal('Men');
    });
    it('is true with www.example.com', () => {
        var result = scram.isValid('Man');
        expect(result).to.equal('Men');
    });
    it('is true with https://www.example.com', () => {
        var result = scram.isValid('Toy');
        expect(result).to.equal('Toys');
    });
    it('is true with http://www.example.com', () => {
        var result = scram.isValid('Toy');
        expect(result).to.equal('Toys');
    });

});