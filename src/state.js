const {JSONPath} = require('jsonpath/jsonpath');

function JSONPathState () {}

let jp = new JSONPath;

for (let key in JSONPath.prototype) {
    JSONPathState.prototype[key] = function () {
        return jp[key](this, ...arguments);
    };
}

Object.assign(JSONPathState.prototype, {
    update (query, update) {
        return this.apply(query, (element) => Object.assign(element, update));
    },
    remove (query) {
        let removed = [];
        this.apply(query, value => {
            removed.push(value);
            return undefined;
        });
        return {removed};
    }
});

module.exports = JSONPathState;
