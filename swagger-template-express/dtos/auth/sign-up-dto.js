/**
 * @typedef SignUpDto
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} phone_num.required
 * @property {string} location.required
 * @property {string} date_birthday.required
 * @property {string} nickname.required
 * @property {string} name.required
 * @property {string} surname.required
 */
class SignUpDto {
    email;
    password;
    phone_num;
    location;
    date_birthday;
    nickname;
    name;
    surname;

    constructor(model) {
        this.email = model.email;
        this.password = model.password;
        this.phone_num = model.phone_num;
        this.location = model.location;
        this.date_birthday = model.date_birthday;
        this.nickname = model.nickname;
        this.name = model.name;
        this.surname = model.surname;
    }
}

export default SignUpDto;