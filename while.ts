// Função que faz o código "dormir" por 1 segundo
const esperarUmSegundo = () => new Promise(resolve => setTimeout(resolve, 1000));

async function iniciarContagem() {
    let timer: number = 10;

    while (timer >= 0) {
        console.log(`Tempo restante: ${timer}s`);
        
        if (timer > 0) {
            await esperarUmSegundo(); // Espera 1000ms (1 segundo)
        }
        
        timer--;
    }

    console.log("Tempo esgotado! 🔔");
}

iniciarContagem();

