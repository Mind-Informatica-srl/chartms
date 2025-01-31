# Node.js Microservice for 3D Pie Chart Generation

This project is a Node.js microservice that exposes a POST endpoint to generate a 3D pie chart using Chart.js. The service processes incoming data and returns an image of the generated chart.

## Project Structure

```
nodejs-microservice
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the chart controller
│   │   └── chartController.js
│   ├── routes                # Defines the application routes
│   │   └── chartRoutes.js
│   └── utils                 # Utility functions for chart generation
│       └── chartUtils.js
├── package.json              # npm configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nodejs-microservice
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and set the necessary environment variables (e.g., PORT).

4. **Run the application:**
   ```
   npm start
   ```

## Usage

To generate a 3D pie chart, send a POST request to the `/chart` endpoint with the required data in the request body. The response will be an image of the generated chart.

### Example Request

```
POST /chart
Content-Type: application/json

{
  "labels": ["Red", "Blue", "Yellow"],
  "data": [12, 19, 3]
}
```

### Example Response

The response will be a binary image of the 3D pie chart.

## License

This project is licensed under the MIT License.