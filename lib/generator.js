const fs = require('fs');
const path = require('path');
module.exports = function(lang, number, data, outputFolder) {
    return new Promise((resolve, reject) => {
        const length = data.inputs.length;
        for (var i = 0; i < length; i++ ) {
            try{
                var file = fs.readFileSync(path.resolve(__dirname, `../templates/template.${lang}`), "utf8");
                const input = data.inputs[i].split('\n')
                    .map(i => `"${i}"`)
                    .filter(i => i !== '""')
                    .join(', ');
                const output = data.outputs[i].split('\n')
                    .map(i => `"${i}"`)
                    .filter(i => i !== '""')
                    .join(', ');

                file = file.replace(/\{{TITLE_TEXT}}/g, data.titleText)
                    .replace(/\{{PROBLEM_TEXT}}/g, data.problemTexts.join('\n\n'))
                    .replace(/\{{INPUT_TEXT}}/g, data.inputTexts.join('\n\n'))
                    .replace(/\{{OUTPUT_TEXT}}/g, data.outputTexts.join('\n\n'))
                    .replace(/\{{INPUTS}}/g, input)
                    .replace(/\{{OUTPUTS}}/g, output)
                const outFileName = `${outputFolder}/problem-${number}${length == 1 ? '' : `-${i+1}`}.${lang}`;
                fs.writeFileSync(outFileName, file);
            } catch(err) {
                reject(err)
                return;
            }
        }
        resolve(null);
    })
}