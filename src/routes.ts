import { Request, Response } from 'express';

interface calculateQueryReq extends Request {
    query: {
        val1: string;
        oper: string;
        val2: string;
    }
}

export function calculate(request: calculateQueryReq, response: Response) {
    const val1: number = parseFloat(request.query.val1);
    const val2: number = parseFloat(request.query.val2);
    const oper = request.query.oper; 

    if (!val1 || !val2 || !oper)
        return response.json({message: "Verifique se os parâmetros val1, val2 e oper foram informados corretamente"})

    switch (oper) {
        case 'soma':
            return response.json({ expression: `${val1}+${val2}`, result: val1 + val2, message: "Expressão calculada sem erros" });
        case 'subtracao': case 'subtração':
            return response.json({ expression: `${val1}-${val2}`, result: val1 - val2, message: "Expressão calculada sem erros" });
        case 'multiplicacao': case 'multiplicação':
            return response.json({ expression: `${val1}*${val2}`, result: val1 * val2, message: "Expressão calculada sem erros" });
        case 'divisao': case 'divisão':
            return response.json({ expression: `${val1}/${val2}`, result: val1 / val2, message: "Expressão calculada sem erros" });
        default:
            return response.json({ message: "Erro na execução do código, verifique se os parâmetros foram enviados corretamente"})
    }
}