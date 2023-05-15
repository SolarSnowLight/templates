/**
 * @typedef GamesCreatedDto
* @property {number} id - уникальный идентификатор (обязательное поле)
* @property {string} name - название игры (обязательное поле)
* @property {number} max_count_commands - максимальное количество команд в игре
* @property {string} date_begin - дата начала задания в формате ISO 8601
* @property {string} date_end - дата окончания задания в формате ISO 8601
* @property {number} age_limit - ограничение по возрасту
* @property {number} type - тип задания
* @property {number} rating - рейтинг задания
* @property {number} min_score - минимальный балл для прохождения задания 
* @property {string} location - местоположение задания
* @property {string} created_at- дата создания задания в формате ISO 8601
* @property {string} updated_at - дата последнего обновления задания в формате ISO 8601
* @property {number} count_points- количество баллов за прохождение задания
* @property {array} warnings - массив предупреждений
* @property {array} bans - массив запретов
* @property {boolean} accepted - флаг, указывающий на принятие задания
 */
class GamesCreatedDto {
    id;
    name;
    max_count_commands;
    date_begin;
    date_end;
    age_limit;
    type;
    rating;
    min_score;
    location;
    created_at;
    updated_at;
    count_points;
    warnings;
    bans;
    accepted;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.max_count_commands = model.max_count_commands;
        this.date_begin = model.date_begin;
        this.date_end = model.date_end;
        this.age_limit = model.age_limit;
        this.type = model.type;
        this.rating = model.rating;
        this.min_score = model.min_score;
        this.location = model.location;
        this.created_at = model.created_at;
        this.updated_at = model.updated_at;
        this.count_points = model.count_points;
        this.warnings = model.warnings;
        this.bans = model.bans;
        this.accepted = model.accepted;
    }
}

export default GamesCreatedDto;