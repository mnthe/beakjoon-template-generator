var request = require("request");
var cheerio = require("cheerio");

const asyncRequest = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (err, _, html) => {
            if (err) {
                reject(err);
            }
            var $ = cheerio.load(html);
            resolve({
                inputs: $('[id^=sample-input-]').map((i, e) => (e.firstChild && e.firstChild.data) || ''),
                outputs: $('[id^=sample-output-]').map((i, e) => (e.firstChild && e.firstChild.data) || ''),
                titleText: $('#problem_title').map((i, e) => (e.firstChild && e.firstChild.data) || '')[0],
                problemTexts: $('#problem_description')[0].children
                    .filter(e => e.name === 'p')
                    .map(e => (e.firstChild && e.firstChild.data) || ''),
                inputTexts: $('#problem_input')[0].children
                    .filter(e => e.name === 'p')
                    .map(e => (e.firstChild && e.firstChild.data) || ''),
                outputTexts: $('#problem_output')[0].children
                    .filter(e => e.name === 'p')
                    .map(e => (e.firstChild && e.firstChild.data) || ''),
            })
        })
    })
}

module.exports = function(number) {
    var url = `https://www.acmicpc.net/problem/${number}`
    return asyncRequest(url);
}