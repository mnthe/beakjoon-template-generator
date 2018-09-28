((module) => {
    // TODO: 템플릿들 자동으로 번들링하도록 변경
    module.csharp = require('./csharp/index');
    module.javascript = require('./cpp/index');
})(module.exports || {})