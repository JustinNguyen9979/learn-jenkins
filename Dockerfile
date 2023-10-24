# Chọn image cơ sở
FROM node:14

WORKDIR /app

# Sao chép mã nguồn vào image
COPY . /app

RUN npm install
RUN npm install -g @babel/core @babel/cli


# Khai báo lệnh khởi động
CMD ["node", "app.js"]

