# Weather_forecast
A weather forecast API
This API provides a greeting message that includes the visitor's IP address, location, and current temperature in their city.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-greeting-api.git
    cd weather-greeting-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```plaintext
    OPENWEATHERMAP_API_KEY=your_valid_openweathermap_api_key
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

Make a GET request to the `/hello` endpoint with an optional `visitor_name` query parameter.

### Example Request

```http
GET /hello?visitor_name=olaoluwa HTTP/1.1
Host: localhost:3000

## Swagger documentation

  ```bash
  Host: localhost:3000/api-docs
  ```