// Tạo một máy chủ web bằng Node.js
const http = require('http');

// Tạo một hàm xử lý các yêu cầu đến máy chủ
const requestHandler = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
};

// Tạo một đối tượng máy chủ với hàm xử lý
const server = http.createServer(requestHandler);

// Khởi động máy chủ và lắng nghe cổng 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

