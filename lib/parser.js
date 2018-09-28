var request = require("request");
var cheerio = require("cheerio");

const asyncRequest = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (err, _, html) => {
            if (err) {
                reject(err);
            }
            var $ = cheerio.load(html);

            const inputs = $('[id^=sample-input-]');
            const outputs = $('[id^=sample-output-]');
            const res = {
                inputs: [],
                outputs: []
            };
            inputs.each((i, e) => {
                var input = e.firstChild && e.firstChild.data;
                var output = outputs[i].firstChild && outputs[i].firstChild.data;
                if (!input) { input = '' }
                if (!output) { output = ''}
                res.inputs.push(input)
                res.outputs.push(output)
            })
            resolve(res)
        })
    })
}

module.exports = function(number) {
    var url = `https://www.acmicpc.net/problem/${number}`
    return asyncRequest(url);
}