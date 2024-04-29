# German Citizenship Test Practice Server

Server code of the application that handles the management of test questions and answers for the German citizenship exam practice tests. It supports adding, removing, and updating questions, and serves these to the client when requested.

The client code can be found [here](https://github.com/beka-zhvania/german-citizenship-test-client).

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB
- Mongoose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beka-zhvania/german-citizenship-test-server.git
   ```
2. Navigate to the project directory:
    ```bash
    cd german-citizenship-test-server
    ```
3. Install dependencies:
     ```bash
    npm install
    ```
4. Create a `.env` file in the project directory and add the following settings. Be sure to provide your MongoDB connection string:
   ```plaintext
   PORT=8080
   ATLAS_URL=your_mongodb_connection_string_here
   ```

### Running the Application

Start the server with Nodemon for automatic reloading:
   ```bash
   npm start
   ```

This will start the server application which interacts with the MongoDB database to manage the citizenship test questions and answers. Ensure the server is running to connect with the client application properly.

