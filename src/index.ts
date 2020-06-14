import express from 'express';
import { calculate } from './routes'
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', calculate);

app.get('/docs', (request, response) => {
    return response.json({ 
        readme: "Para usar esta api, passe seus parâmetros dessa forma: " + 
        "https://calculadora-webservice.herokuapp.com/?val1=<primeirovalor>&oper=<operacaodesejada>&val2=<segundovalor>" +
        "substitua o conteudo dentro dos simbolos por seus parametros(sem incluir '<, >')"
    });
})

app.listen(process.env.PORT || 3333);