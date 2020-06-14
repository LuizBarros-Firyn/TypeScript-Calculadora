"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.get('/', routes_1.calculate);
app.get('/docs', function (request, response) {
    return response.json({
        readme: "Para usar esta api, passe seus parâmetros dessa forma: " +
            "https://calculadora-webservice.herokuapp.com/?val1=<primeirovalor>&&oper=<operacaodesejada>&&val2=<segundovalor>" +
            "substitua o conteudo dentro dos simbolos por seus parametros(sem incluir '<, >')"
    });
});
app.listen(process.env.PORT || 3333);
