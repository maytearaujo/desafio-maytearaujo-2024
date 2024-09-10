class RecintosZoo {

    constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
        this.numero = numero;
        this.bioma = bioma;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
    }

    analisaRecintos(animal, quantidade) {

        switch (animal) {
            case "LEAO":
                tamanhoBioma = 2; bioma = "savana";
                console.log(animal);

                break

            case "LEOPARDO":
                tamanhoBioma = 3; bioma = "rio";
                console.log(animal);

                break

            case "CROCODILO":
                tamanhoBioma = 1; bioma = "savana";
                console.log(animal);

                break

            case "MACACO":
                tamanhoBioma = 2; bioma = "savana";
                console.log(animal);
                break

            case "GAZELA":
                tamanhoBioma = 3; bioma = "savana";
                console.log(animal);

                break

            case "HIPOPOTAMO":
                tamanhoBioma = 4; bioma = "savana";
                console.log(animal);
                break;

            default:
                console.warn("Animal inválido")
        }



        console.table(this.recintos)


    }

}

const recinto1 = new RecintosZoo(1, "savana", 10, "3 macacos");
const recinto2 = new RecintosZoo(2, "floresta", 5, "vazio");
const recinto3 = new RecintosZoo(3, "savana e rio", 7, "1 gazela");
const recinto4 = new RecintosZoo(4, "rio", 8, "vazio");
const recinto5 = new RecintosZoo(5, "savana", 9, "1 leão");

console.table(recinto1)


export { RecintosZoo as RecintosZoo };
