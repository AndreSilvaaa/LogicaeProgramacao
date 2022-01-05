// Variáveis do participante
let dataEvento = new Date("2022, 11, 26") //data do evento
let idadeParticipante = 101 //idade do participante
let participantesEvento = 5 //numero de participantes no evento

// Constantes
let dataAtual = new Date() //data atual
let limiteParticipantes = 100 //limite de participantes por evento
let idadeLimite = 18 //idade mínima para participação
let participantesCadastrados = 0 //

// Codigo

console.log ("Hoje é "+ dataAtual +", a data selecionada para o agendamento da participação no evento foi "+ dataEvento)
if (dataEvento.getTime() > dataAtual.getTime()) {
    console.log ("Cadastro autorizado, qual a idade do participante?")
    console.log (idadeParticipante + " anos")
   
    if (idadeParticipante >= idadeLimite){
    console.log ("Confira abaixo a lista de participantes confirmados:")
    
    while (participantesCadastrados <= participantesEvento && participantesCadastrados <= limiteParticipantes)  {
        console.log('Participante ' + (participantesCadastrados+1))
        participantesCadastrados++
    }

     if (participantesEvento < limiteParticipantes){
        console.log ("Evento cadastrado com sucesso!")
    }
        else{
        console.log ("Limite máximo de participaantes atingido, selecione outra data")
    }
}
    else {
    console.log ("Idade inferior a 18 anos, participação negada")
}
} 

else {
    console.log ("Cadastro negado, confirme a data do evento")
}
