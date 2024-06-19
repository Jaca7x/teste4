
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vamo ver se você realmente sabe fazer aquele xhurrasquinho de domingo?",
        alternativas: [
            {
                texto: "Vegano?",
                afirmacao: "Nunca vi churrasco de passarinho pipipi."
            },
            {
                texto: "OU CARNEEE!",
                afirmacao: "Isso e CHURRASCO!."
            }
        ]
    },
    {
        enunciado: "Qual você prefere para aquele xhurrasquinho?",
        alternativas: [
            {
                texto: "Abobrinha na grelha??",
                afirmacao: "Abobrinha so na sopa."
            },
            {
                texto: "Ou ALCATRA NA GRELHA!!",
                afirmacao: "Nois e carnivoro."
            }
        ]
    },
    {
        enunciado: "Qual a melhor bebida no churrasquinho?",
        alternativas: [
            {
                texto: "Suco",
                afirmacao: "fitnes."
            },
            {
                texto: "Cervejinha",
                afirmacao: "Aí sim em."
            }
        ]
    },
    {
        enunciado: "Qual e a pura pra ouvir no churrasquinho?",
        alternativas: [
            {
                texto: "Pop",
                afirmacao: "Viado."
            },
            {
                texto: "Pagodinho",
                afirmacao: "Aí sim em."
            }
        ]
    },
    {
        enunciado: "Pôs churrasquinho qual e melhor pra perde o dinheiro",
        alternativas: [
            {
                texto: "Uno",
                afirmacao: "Ui colorido."
            },
            {
                texto: "Truco",
                afirmacao: "Quebramo a mesa."
            }
        ]
    },
];

 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Pro churrasco...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();