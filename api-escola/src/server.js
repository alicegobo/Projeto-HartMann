// server.js
import 'dotenv/config'
import express from 'express';
import { conectarBanco } from './config/database.js';
import agentesRoutes from './routes/agentes.routes.js';
import {logger} from './middleware/logger.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

await conectarBanco()

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());

// tudo que começar com /agentes vai para agentesRoutes
app.use('/agentes', agentesRoutes);

// notFound e errorHandler precisam vir DEPOIS das rotas
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
});
