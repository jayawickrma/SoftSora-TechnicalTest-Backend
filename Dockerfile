# 1. Use official Node.js image
FROM node:18

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of your code
COPY . .

# 5. Expose the port your app listens to
EXPOSE 8080

# 6. Start the app using nodemon and ts-node
CMD ["npx", "nodemon", "Server.ts"]
