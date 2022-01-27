import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composição de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composição de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component{
  render() {
    return (
      <section className="section">
        <ul className="lista">{conteudos.map((obj) => (
          <div key={obj.conteudo} className="obj">
            <ul>
              <h3>{`O conteúdo é: ${obj.conteudo}`}</h3>
              <li>{`Status: ${obj.status}`}</li>
              <li>{`Bloco: ${obj.bloco}`}</li>
            </ul>
          </div>
        ))}</ul>
      </section>
    )
  }
}

export default Content;