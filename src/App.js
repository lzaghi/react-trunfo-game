import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      deck: [],
      deckCard: true,
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  validaTrunfo = (trunfo) => {
    if (trunfo) {
      this.setState({
        trunfo: false,
        hasTrunfo: true,
      });
    }
  };

  onSaveButtonClick = () => {
    const { nome,
      description, image, attr1, attr2, attr3, rare, trunfo, deckCard } = this.state;
    const newCard = {
      nome,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      deckCard };
    this.validaTrunfo(trunfo);
    this.setState((prevState) => ({
      nome: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      deck: [...prevState.deck, newCard],
    }));
  };

  isSaveButtonDisabled = () => {
    const { nome, description, image, attr1, attr2, attr3 } = this.state;

    const validName = nome.length !== 0;
    const validDesc = description.length !== 0;
    const validImage = image.length !== 0;

    const attrMax = 90;
    const validAttr1 = attr1 >= 0 && attr1 <= attrMax;
    const validAttr2 = attr2 >= 0 && attr2 <= attrMax;
    const validAttr3 = attr3 >= 0 && attr3 <= attrMax;

    const sumMax = 210;
    const sum = Number(attr1) + Number(attr2) + Number(attr3);
    const validSum = sum <= sumMax;

    const filledForm = validName
      && validDesc && validImage && validAttr1 && validAttr2 && validAttr3 && validSum;

    return !filledForm;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  excluiCard = ({ target }) => {
    const { deck } = this.state;
    if (target.parentNode.firstChild.nextSibling.innerHTML === 'Super Trunfo') {
      this.setState({
        hasTrunfo: false,
      });
    }

    const newDeck = deck
      .filter((card) => card.nome !== target.parentNode.firstChild.innerHTML);

    this.setState({
      deck: newDeck,
    });
  };

  handleFilter = () => {
    const { deck, filterName, filterRare, filterTrunfo } = this.state;

    let deckFiltrado = deck
      .filter((card) => card.nome.includes(filterName))
      .filter((card) => card.rare.startsWith(filterRare) || filterRare === 'todas');

    if (filterTrunfo) {
      deckFiltrado = deckFiltrado.filter((card) => card.trunfo === filterTrunfo);
    }

    return deckFiltrado;
  };

  render() {
    const {
      nome,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      hasTrunfo,
      filterTrunfo,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo c:</h1>

        <Form
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ this.onSaveButtonClick }
          filterTrunfo={ filterTrunfo }
        />

        <Card
          cardName={ nome }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
        />

        { this.handleFilter()
          .map((card, index) => (
            <Card
              key={ index }
              cardName={ card.nome }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
              deckCard={ card.deckCard }
              excluiCard={ this.excluiCard }
            />
          ))}

      </div>
    );
  }
}

export default App;
