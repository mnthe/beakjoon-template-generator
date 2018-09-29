const lib = require('./lib');
const path = require('path');

module.exports = function(grunt) {
    grunt.registerTask('create', async function(lang, number, outputPath) {
        console.log('lang: ', lang, 'number: ', number, 'outputPath: ', outputPath);
        const done = this.async();
        try {
            if (!outputPath || outputPath == '') {
                outputPath = `./output`
            }
            const data = await lib.parse(number);
            await lib.generate(lang, data, path.resolve(__dirname, outputPath));
        } catch (err) {
            console.log(err);
        }
        done();
    })
}