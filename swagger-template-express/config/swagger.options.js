const options = (dirname) => {
    return {
        swaggerDefinition: {
            info: {
                description: 'Описание',
                title: 'Название',
                version: '1.0.0',
                contact: {
                    email: "swdaniel@yandex.ru"
                }
            },
            host: 'localhost:5000',
            basePath: '/',
            produces: [
                "application/json",
                "application/xml"
            ],
            schemes: ['http', 'https'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            },
            externalDocs: {
                description: 'Ссылка на внешнюю документацию',
                url: 'http://localhost:5000/docs'
            },
        },
        route: {
            url: '/docs/swagger2',
            docs: '/swagger.json',
        },
        basedir: dirname,
        files: ['./controllers/*.js', './dtos/**/*.js', './models/**/*.js', './exceptions/*.js']
    };
}

export default options;