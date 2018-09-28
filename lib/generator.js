

module.exports = function(template, data, filePath) {
    return new Promise((resolve, reject) => {
        template.generate(filePath, data.inputs, data.outputs)
            .then(r => resolve(r))
            .catch(e => reject(e));
    })
}