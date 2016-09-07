const {Collection} = require('delux');
const JSONPathState = require('./src/state');

class JSONPathCollection extends Collection {
    constructor (init) {
        super(Object.assign(new JSONPathState, init));
    }
}

module.exports = {JSONPathCollection, JSONPathState};
