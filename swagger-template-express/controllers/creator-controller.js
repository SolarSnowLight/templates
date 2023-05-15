/**
 * Создание новой игры
 * @route POST /creator/game/create
 * @group Создатель (контент менеджер) - Функции для наполнения контентом
 * @operationId creatorGameCreate
 * @param {GameCreateDto.model} input.body.required Входные данные
 * @returns {GameCreateDto.model} 200 - Выходные данные
 * @returns {ApiError.model} default - Ошибка запроса
 * @security JWT
 */

/**
 * Просмотр списка созданных конкретным создателем игр
 * @route GET /creator/games/created
 * @group Создатель (контент менеджер) - Функции для наполнения контентом
 * @operationId creatorGamesCreated
 * @returns {Array.<GamesCreatedDto>} 200 - Выходные данные
 * @returns {ApiError.model} default - Ошибка запроса
 * @security JWT
 */

/**
 * Удаление игры
 * @route POST /creator/game/delete
 * @group Создатель (контент менеджер) - Функции для наполнения контентом
 * @operationId creatorGameDelete
 * @param {GameDeleteDto.model} input.body.required Входные данные
 * @returns {Array.<GamesCreatedDto>} 200 - Выходные данные
 * @returns {ApiError.model} default - Ошибка запроса
 * @security JWT
 */