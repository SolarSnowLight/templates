/**
 * @typedef TokenDto
 * @property {string} access_token
 * @property {string} refresh_token
 */
class TokenDto {
    access_token;
    refresh_token;

    constructor(model){
        this.access_token = model.access_token;
        this.refresh_token = model.refresh_token;
    }
}

export default TokenDto;