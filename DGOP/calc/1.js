let sorvete = [];

alert("🤠Red dead Redemptions de Sorvetes🤠");

while (true) {
    let opcao = prompt("\n1 - Adicionar sabor\n2 - Remover último sabor\n3 - Visualizar sorvete\n4 - Finalizar pedido\nEscolha uma opção:");

    if (opcao === "1") {
        if (sorvete.length < 3) {
            let sabor = prompt("Digite o sabor a adicionar cawboi:");
            sorvete.push(sabor);
            alert("Sabor adicionado cawboi!");
        } else {
            alert("Limite de sabores atingido, remova um sabor boy!");
        }
    } else if (opcao === "2") {
        if (sorvete.length > 0) {
            let saborRemovido = sorvete.pop();
            alert("Sabor removido cawboi!");
        } else {
            alert("Não existem sabores adicionados cawboi!");
        }
    } else if (opcao === "3") {
        if (sorvete.length > 0) {
            let mensagem = "Seu sorvete cawboi: ";
            for (let i = 0; i < sorvete.length; i++) {
                mensagem += "Camada " + (i + 1) + " - Sabor " + sorvete[i];
                if (i < sorvete.length - 1) {
                    mensagem += ", ";
                }
            }
            alert(mensagem);
        } else {
            alert("Ei cawboi! Seu sorvete não possui sabores!");
        }
    } else if (opcao === "4") {
        if (sorvete.length > 0) {
            alert("Pedido realizado boy!");
        } else {
            alert("Adicione pelo menos um sabor boy!");
        }
        break;
    } else {
        alert("Opção inválida boy. Por favor, escolha uma opção válida cawboi.");
    }
}