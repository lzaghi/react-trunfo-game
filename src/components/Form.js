import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
            cols="30"
            rows="10"
          >
            a
          </textarea>
        </label>

        <label htmlFor="attr1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
          />
        </label>

        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
          />
        </label>

        <label htmlFor="rare">
          Raridade
          <select
            data-testid="rare-input"
            name="rare"
            id="rare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
          />
        </label>

        <button data-testid="save-button" type="button">Salvar</button>
      </>
    );
  }
}

export default Form;
