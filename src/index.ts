import express from 'express';
import { calculate } from './routes'

const app = express();

app.get('/', calculate);

app.listen(3333);