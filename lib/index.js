((module) => {
    module.parse = require('./parser');
    module.generate = require('./generator');
})(module.exports || {})