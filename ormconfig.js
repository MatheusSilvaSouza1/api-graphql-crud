const path = require('path')

module.exports = {
    type: "sqlite",
    database: path.resolve(__dirname, 'src', 'database', 'db.sqlite'),
    entities: [
        path.resolve(__dirname, 'src', 'entities', '*.ts')
    ],
    migrations: [
        path.resolve(__dirname, 'src', 'database', 'migrations', '*.ts')
    ],
    cli: {
        entitiesDir: path.resolve(__dirname, 'src', 'entities'),
        migrationsDir: path.resolve(__dirname, 'src', 'database', 'migrations'),
    }
}