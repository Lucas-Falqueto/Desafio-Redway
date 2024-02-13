const server = require('./app')
const PORT = 3000

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)

})

process.on('SIGINT', () => {
    server.close(() => {
        console.log("Servidor encerrado com sucesso");
        process.exit(0);
    });
})