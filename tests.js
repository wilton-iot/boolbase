define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require("assert"),
    boolbase = require("boolbase/");

assert.strictEqual(boolbase.trueFunc(), true, "should evaluate to true");
assert.strictEqual(boolbase.falseFunc(), false, "should evaluate to false");

return module.exports;});
