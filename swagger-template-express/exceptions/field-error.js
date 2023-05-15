/**
 * @typedef FieldError
 * @property {string} type
 * @property {string} value
 * @property {string} msg
 * @property {string} path
 * @property {string} location
 */
class FieldError {
    type;
    value;
    msg;
    path;
    location;

    constructor(model){
        this.type = model.type;
        this.value = model.value;
        this.msg = model.msg;
        this.path = model.path;
        this.location = model.location;
    }
}

export default FieldError;