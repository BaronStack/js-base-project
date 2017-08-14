"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var lyrics = require('../lib/lyrics');

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("TEST1--输入数字为0，获得最后一段歌词", function(){
        var input = 0;
        var result = main(input);
        var expect_string = lyrics.lastLyrics();
        
        expect(expect_string).to.equal(result);
    });

    it("TEST2--输入数字为99，获得全部歌词", function(){

        var input = 99;
        var result = main(input);
        var expect_string = lyrics.entireLyrics();

        expect(expect_string).to.equal(result);
    });
    it("TEST3--输入数字1，获得最后两段歌词", function(){
        var input = 1;
        var result = main(input);
        var expect_string = lyrics.lastTwoLyrics();

        expect(expect_string).to.equal(result);
    });


});