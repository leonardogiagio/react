// function handleMouser(event) {
//     const {clientX, clientY} = event
//     console.log(clientX, clientY)
// }

// document.addEventListener('click', handleMouser)

const frutas = ["banana", "uva"];
const [fruta1, fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [
    4,
    function (lado) {
        return 4 * lado;
    },
];

const [lados, perimetro] = useQuadrado
console.log(lados)
console.log(perimetro(10))