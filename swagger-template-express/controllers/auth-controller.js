/**
 * Регистрация пользователя
 * @route POST /auth/sign-up
 * @group Авторизация (пользователь) - Функции для авторизации пользователя
 * @param {SignUpDto.model} input.body.required Входные данные
 * @returns {AuthDto.model} 201 - Авторизационные данные пользователя
 * @returns {ApiError.model} default - Ошибка запроса
 */

/**
 * Авторизация пользовател
 * @route POST /auth/sign-in
 * @group Авторизация (пользователь) - Функции для авторизации пользователя
 * @param {SignInDto.model} input.body.required Входные данные
 * @returns {AuthDto.model} 200 - Авторизационные данные пользователя
 * @returns {ApiError.model} default - Ошибка запроса
 */

/**
 * Выход пользователя из системы
 * @route POST /auth/logout
 * @group Авторизация (пользователь) - Функции для авторизации пользователя
 * @returns {SuccessDto.model} 200 - Флаг, определяющий успех операции выхода пользователя из системы
 * @returns {ApiError.model} default - Ошибка запроса
 */


/**
 * Авторизация пользователя
 * @route POST /auth/management/sign-in
 * @group Авторизация (для управляющего веб сайта) - Функция для авторизации пользователя
 * @param {SignInDto.model} input.body.required Входные данные
 * @returns {AuthDto.model} 200 - Авторизационные данные пользователя
 * @returns {ApiError.model} default - Ошибка запроса
 */

/**
 * Авторизация пользователя
 * @route POST /auth/management/logout
 * @group Авторизация (для управляющего веб сайта) - Функция для авторизации пользователя
 * @returns {SuccessDto.model} 200 - Флаг, определяющий успех операции выхода пользователя из системы
 * @returns {ApiError.model} default - Ошибка запроса
 */

/**
 * Выход пользователя из системы
 * @route POST /auth/activate
 * @group Авторизация (пользователь) - Функции для авторизации пользователя
 * @param {ActivationLinkDto.model} input.body.required Входные данные
 * @returns {SuccessDto.model} 200 - Флаг, определяющий успех операции подтверждения пользователя
 * @returns {ApiError.model} default - Ошибка запроса
 */

/**
 * Обновление токена доступа
 * @route POST /auth/refresh/token
 * @group Авторизация (пользователь) - Функции для авторизации пользователя
 * @returns {AuthDto.model} 201 - Авторизационные данные пользователя
 * @returns {ApiError.model} default - Ошибка запроса
 */