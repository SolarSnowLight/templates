/**
 * @typedef AttributeDto
 * @property {boolean} read
 * @property {boolean} write
 * @property {boolean} update
 * @property {boolean} delete
 */
class AttributeDto {
    read;
    write;
    update;
    delete;

    constructor(model) {
        this.read = model.read;
        this.write = model.write;
        this.update = model.update;
        this.delete = model.delete;
    }
}

export default AttributeDto;