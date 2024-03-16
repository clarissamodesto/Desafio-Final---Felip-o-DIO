
//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um método desconhecido de ataque';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Saídas
const heroi1 = new Heroi("Gandalf", 2000, "mago");
heroi1.atacar();  

const heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar();  
