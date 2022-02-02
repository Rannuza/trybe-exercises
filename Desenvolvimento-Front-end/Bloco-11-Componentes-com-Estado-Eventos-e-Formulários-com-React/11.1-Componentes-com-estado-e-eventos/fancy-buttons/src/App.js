import React from 'react';
import './App.css';
import Button from './Button';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
// function handleClick(name) {
//   console.log(`Clicou no ${name}!`)
// }

class App extends React.Component {
  render() {
    const names = ['Botão 1', 'Botão 2', 'Botão 3']
    return (
      <div>
        {names.map((name) => (<Button key={name} onClick={() => { this.handleClick(name)}} nameButton={name} />
        ))}
      </div>
    )
  }
}

export default App;
