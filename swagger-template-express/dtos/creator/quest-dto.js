/**
 * @typedef QuestDto
 * @property {string} task
 * @property {string} hint
 * @property {number} radius
 * @property {string} ref_media
 * @property {number} marks_id
 */
class QuestDto {
    task;
    hint;
    radius;
    ref_media;
    marks_id;

    constructor(model){
        this.task = model.task;
        this.hint = model.hint;
        this.radius = model.radius;
        this.ref_media = model.ref_media;
        this.marks_id = model.marks_id
    }
}

export default QuestDto;