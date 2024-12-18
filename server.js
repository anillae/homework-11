const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    console.log('Новый клиент подключен');

    ws.send('Добро пожаловать в чат!');

    ws.on('message', (message) => {
        console.log(`Получено сообщение: ${message}`);
        
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Клиент отключен');
    });
});

console.log('Сервер запущен на порту 8080');


