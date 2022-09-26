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
      trunfo: '',
    };
  }

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
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
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
      </div>
    );
  }
}

export default App;
