// rest operator

function showList(empresa, ...clientes) {
    clientes.forEach((cliente) => {
        console.log(cliente, empresa);
    });
}

showList("Google", "Leonardo", "Andre", "Teste");

// spread operator
const numeros = [10, 5, 20];
// const maior = Math.max(10, 5, 2, 30)
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [23, ...numeros, 24, 32, 40];
console.log(numeros2);

const carro = {
    cor: "Azul",
    portas: 4,
};

carroAno = {...carro, ano:2008}

console.log(carro, carroAno)
