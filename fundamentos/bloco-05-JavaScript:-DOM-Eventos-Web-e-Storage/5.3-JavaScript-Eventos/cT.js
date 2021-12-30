function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();


function criaCalendario () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const dias = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const dia = dezDaysList[i];
    const calendario = document.createElement('li');
    calendario.innerHTML = dia;
    
    dias.appendChild(calendario);

    calendario.classList.add('day');

    if ((dezDaysList[i] === 24) || (dezDaysList[i] === 31) ) {
      
      calendario.className += " holiday";
      continue;
    } else  if ((dezDaysList[i] === 4) || (dezDaysList[i] === 11) || (dezDaysList[i] === 18)) {
      calendario.className += " friday";
      continue;

    } else  if (dezDaysList[i] === 25) {
      calendario.className += " holiday friday";
      
    };   
  };
};

criaCalendario();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holiday(string) {
  const button = document.querySelector('.buttons-container');
  button.appendChild(document.createElement('button'));
  const btnFeriado = document.querySelector('button');
  btnFeriado.textContent = string;
  btnFeriado.id = 'btn-holiday';
};

holiday('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function destacaFeriados () {
  let holiday = document.querySelectorAll('.holiday');
  
  for (let i = 0; i < holiday.length; i += 1){
    if (holiday[i].style.backgroundColor === 'white') {
      holiday[i].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday[i].style.backgroundColor = 'white';
    }
  }
};
document.querySelector('#btn-holiday').addEventListener('click', destacaFeriados);

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoSexta(string) {
  let button = document.querySelector('.buttons-container');
  button.appendChild(document.createElement('button')).id = 'btn-friday';
  let btnSexta = document.querySelector('#btn-friday')
  btnSexta.textContent = string;
}

botaoSexta("Sexta-feira");

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function mudaSexta () {
  let friday = document.querySelectorAll('.friday');
  let sextas = [ 4, 11, 18, 25];
  for (let i = 0; i < friday.length; i += 1){
    if (friday[i].textContent !== 'SEXTOU o/') {
      friday[i].textContent = 'SEXTOU o/';
    } else {
      friday[i].innerText = sextas[i];
    }
  }
};
document.querySelector('#btn-friday').addEventListener('click', mudaSexta);

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function ativaZoom (event){
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
};

function desativaZoom (event){
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
}

const dias = document.querySelector('#days');
dias.addEventListener('mouseover', ativaZoom);
dias.addEventListener('mouseout', desativaZoom);

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTarefa (string) {
  document.querySelector('.my-tasks').appendChild(document.createElement('span')).textContent = string;
}

addTarefa('cozinhar')

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legenda (cor) {
  document.querySelector('.my-tasks').appendChild(document.createElement('div')).className = 'task';
  document.querySelector('.task').style.backgroundColor = cor;
};
legenda('green');

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const task = document.querySelector('.task')

function selected (event) {
  if (event.target.className === 'task selected') {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected')
  }
};
task.addEventListener('click', selected);

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function mudaCor (event) {
  let cor = task.style.backgroundColor

  if (document.querySelectorAll('.selected').length > 0) {
    if (event.target.style.color !== cor) {
      event.target.style.color = cor;
    } else {
      event.target.style.color = ' rgb(119,119,119)';
    }
  }
}

dias.addEventListener('click', mudaCor);

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.

const input = document.querySelector('input');
const adicionar = document.querySelector('#btn-add');
const taskList = document.querySelector('.task-list');
function addCompromisso () {
  if (input.value === '') {
    alert('Digite um novo compromsso!');
  } else {
    taskList.appendChild(document.createElement('li')).textContent = input.value;
    input.value = '';
  }
}

adicionar.addEventListener('click', addCompromisso);
