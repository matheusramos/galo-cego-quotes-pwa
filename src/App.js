import "./App.css";

import React, { PureComponent } from "react";

import galo from "./galo.png";

class App extends PureComponent {
  static quotes = [
    "Não, é por causa de ser ator e ser acusado pelos pensamentos que se falam as perguntas erradas.",
    "Largar mão de ser besta,se procurar de ser homi,criar vergonha cara,se tomar decumento, trabaiar.",
    "Vida para o resto da sua vida...",
    "Eu nunca te amo...\nEu te aludo.",
    "Meu corpo é um corpo estadual, legal e bonito.",
    "Se tem que se fazer, tem que se fazer com a própria pessoa que se merece.\nEu não se penso em fazer maldade com ninguém.",
    "mas não tinha nada acontecido, se tivesse acontecido então eu não se mereço isso se tem que ser fazer tem que se fazer com a propria pessoa que merece isso, não com a vida inocente",
    "é ué"
  ];

  state = {
    quote: ""
  };

  getRandomQuote = () => {
    const size = App.quotes.length;
    const random = Math.random() * size;
    const index = Math.floor(random) % size;

    this.setState({
      quote: App.quotes[index]
    });
  };

  render() {
    const { quote } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{quote && `"${quote}"`}</p>
          <a className="App-link" onClick={this.getRandomQuote}>
            <img src={galo} className="App-logo" alt="logo" />
          </a>
        </header>
      </div>
    );
  }
}
export default App;
