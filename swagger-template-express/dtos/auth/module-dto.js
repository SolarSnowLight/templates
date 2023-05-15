/**
 * @typedef ModuleDto
 * @property {boolean} player
 * @property {boolean} judge
 * @property {boolean} creator
 * @property {boolean} moderator
 * @property {boolean} manager
 * @property {boolean} admin
 * @property {boolean} super_admin
 */
class ModuleDto {
    player;
    judge;
    creator;
    moderator;
    manager;
    admin;
    super_admin;

    constructor(model) {
        this.player = model.player;
        this.judge = model.judge;
        this.creator = model.creator;
        this.moderator = model.moderator;
        this.manager = model.manager;
        this.admin = model.admin;
        this.super_admin = model.super_admin;
    }
}

export default ModuleDto;