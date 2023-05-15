import QuestDto from "./quest-dto.js";

/**
 * @typedef GameCreateDto
 * @property {string} location.required
 * @property {string} date_begin.required
 * @property {string} date_end.required
 * @property {number} type.required
 * @property {number} rating.required
 * @property {number} count_commands.required
 * @property {number} min_score.required
 * @property {number} age_limit.required
 * @property {string} name.required
 * @property {Array.<QuestDto>} quests.required
 */
class GameCreateDto {
    location;
    date_begin;
    date_end;
    type;
    rating;
    count_commands;
    min_score;
    age_limit;
    name;
    quests;
    users_id;

    constructor(model) {
        this.location = model.location;
        this.date_begin = model.date_begin;
        this.date_end = model.date_end;
        this.type = model.type;
        this.rating = model.rating;
        this.count_commands = model.count_commands;
        this.min_score = model.min_score;
        this.age_limit = model.age_limit;
        this.name = model.name;
        this.quests = model.quests;
        this.users_id = model.users_id;
    }
}

export default GameCreateDto;