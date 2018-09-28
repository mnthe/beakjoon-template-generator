const lib = require('./lib');
const templates = require('./templates');

module.exports = function(grunt) {
    grunt.registerTask('create', async function(lang, number, outputPath) {
        const done = this.async();
        try {
            if (!outputPath || outputPath == '') {
                outputPath = `../${lang}`
            }
            console.log('lang: ', lang, 'number: ', number, 'outputPath: ', outputPath);
            const data = await lib.parse(number);
            const template = templates[lang];
            await lib.generate(template, data, `${outputPath}/${lang}-${number}.${template.extension}`);
        } catch (err) {
            console.log(err);
        }
        done();
    })
}