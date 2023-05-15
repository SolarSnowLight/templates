/**
 * @typedef LogoutDto
 * @property {string} access_token
 * @property {string} refresh_token
 * @property {number} type_auth
 */
class LogoutDto {
    access_token;
    refresh_token;
    type_auth;

    constructor(model) {
        this.users_id = model.users_id;
        this.access_token = model.access_token;
        this.refresh_token = model.refresh_token;
        this.type_auth = model.type_auth;
    }
}

export default LogoutDto;