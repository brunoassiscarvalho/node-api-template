# Base image
FROM node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port used by the application
EXPOSE 3005

# Set the command to run when the container starts
CMD ["npm", "start"]