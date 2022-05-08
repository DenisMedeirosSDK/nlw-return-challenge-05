import cors from 'cors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { routes } from './routes';
import swaggerDocument from './swagger.json';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (request: Request, response: Response) => {
  return response.end('hello world');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
