const lib = require('./lib')
const templates = require('./templates')
const template = templates['csharp'];
lib.parse(10718)
    .then(r => {
        lib.generate(template, r, './output/generated.cs')
    });