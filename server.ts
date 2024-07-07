import express from 'express';
import dotenv from 'dotenv';
import { getHello } from './src/controller/forecast.controller'
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';

dotenv.config();

const app = express();
const packageJson = require('../package.json');

const swaggerJsDoc = YAML.load('./swagger/docx.yaml');


// middleware to handle an incoming request and also Support json encoded bodies
app.use(express.json());

// load body parser
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/hello', getHello);

// Load and Serve Swagger Documentation in Development and Production
if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'production'
) {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc)); // Configure Swagger documentation
}

app.listen(process.env.PORT, () => {
      console.log(`Version: v${packageJson['version']}`);
      console.log(`⚡️[server]: Server running on port at ${process.env.PORT}`);
    });