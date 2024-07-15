function BToS(obj) {
    // Verifica se o argumento é um objeto
    if (typeof obj === 'object' && obj !== null) {
        // Cria um array para armazenar os valores das chaves específicas
        let valores = [];
        
        // Verifica se a chave "nome" existe e adiciona o valor ao array
        if (obj.hasOwnProperty('nome')) {
            valores.push(obj.nome);
        } else {
            valores.push("Chave 'nome' não encontrada");
        }
        
        if (obj.hasOwnProperty('posição')) {
            valores.push(obj.posição);
        } else {
            valores.push("Chave 'posição' não encontrada");
        }
        
        // Verifica se a chave "cidade" existe e adiciona o valor ao array
        if (obj.hasOwnProperty('cidade')) {
            valores.push(obj.cidade);
        } else {
            valores.push("Chave 'cidade' não encontrada");
        }
        
        // Retorna o array de valores
        return valores;
    } else {
        // Retorna uma mensagem de erro se o argumento não for um objeto
        return "O argumento fornecido não é um objeto.";
    }
}

// Exemplo de uso
const objeto = { nome: 'Douglas', posição: 'Gk', cidade: 'São José' };
console.log(BToS(objeto)); 