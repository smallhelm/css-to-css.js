var fs = require("fs");
var UglifyJS = require("uglify-js");

var template = UglifyJS.minify("./inject-css-fn.template.js").code;

var lines = [];
lines.push("module.exports = function(css){");
lines.push("  return '"+template.replace(/"INPUT_CSS_HERE"/, "'+JSON.stringify(css)+'")+"';");
lines.push("};");

fs.writeFileSync("./index.js", lines.join("\n"));
