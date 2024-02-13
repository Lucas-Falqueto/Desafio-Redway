const AppDataSource = require('./data-source')

module.exports = createConnectionDB = async () => {
    const connection = await AppDataSource.initialize()
    console.log(`App conectado ao BD ${connection.options.database}`)
    process.on('SIGINT', () => {
        connection.destroy().then(() => console.log('Conexão com BD fechada'))
    })
}