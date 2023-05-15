
/**
 * @typedef GameDeleteDto
 * @property {number} info_games_id.required - Идентификатор игры
 */
class GameDeleteDto {
    users_id;
    info_games_id;

    constructor(model){
        this.info_games_id = model.info_games_id;
        this.users_id = model.users_id;
    }
}

export default GameDeleteDto;