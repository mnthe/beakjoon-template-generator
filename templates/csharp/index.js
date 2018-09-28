
module.exports = {
    generate: (outputPath, inputs, outputs) => {
        return new Promise((resolve, reject) => {
            var fs = require('fs');
            fs.readFile(__dirname + '/template.cs', "utf8", (err, data) => {
                if (err) {
                    reject(err)
                    return;
                }
                var input = inputs[0].split('\n')
                    .map(i => `"${i}"`)
                    .filter(i => i !== '""')
                    .join(', ')
                var output = outputs[0].split('\n')
                    .map(i => `"${i}"`)
                    .filter(i => i !== '""')
                    .join(', ')
                data = data.replace(/\{{INPUTS}}/g, input)
                    .replace(/\{{OUTPUTS}}/g, output)
                fs.writeFile(outputPath, data, (err) => {
                    err ? reject(err) : resolve(null);
                });
            });
        })
    },
    extension: 'cs'
}