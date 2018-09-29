const fs = require('fs');
const path = require('path');
module.exports = function(lang, number, data, outputFolder) {
    return new Promise((resolve, reject) => {
        const titleText = data.titleText;
        const problemText = data.problemTexts.join('\n\n');
        const inputText = data.inputTexts.join('\n\n');
        const outputText = data.outputTexts.join('\n\n');
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

                file = file.replace(/\{{TITLE_TEXT}}/g, titleText)
                    .replace(/\{{PROBLEM_TEXT}}/g, problemText)
                    .replace(/\{{INPUT_TEXT}}/g, inputText)
                    .replace(/\{{OUTPUT_TEXT}}/g, outputText)
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