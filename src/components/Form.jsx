import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <form className="form-box">

        <label htmlFor="cardName">
          Name:
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            name="cardName"
          />
        </label>

        <label htmlFor="cardDescription">
          Description:
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            className="card-description"
          />
        </label>

        <label htmlFor="cardAttr1">
          Attribute 1:
          <input
            data-testid="attr1-input"
            type="number"
            id="cardAttr1"
            name="cardAttr1"
          />
        </label>

        <label htmlFor="cardAttr2">
          Attribute 2:
          <input
            data-testid="attr2-input"
            type="number"
            id="cardAttr2"
            name="cardAttr2"
          />
        </label>

        <label htmlFor="cardAttr3">
          Attribute 3:
          <input
            data-testid="attr3-input"
            type="number"
            id="cardAttr3"
            name="cardAttr3"
          />
        </label>

        <label htmlFor="cardImage">
          Image:
          <input
            data-testid="image-input"
            type="text"
            id="cardImage"
            name="cardImage"
          />
        </label>
        <br />
        <div>
          <label htmlFor="cardRare" className="rarity-tryunfo-label">
            Rarity:
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="cardTrunfo" className="rarity-tryunfo-label">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              name="cardTrunfo"
              className="checkbox-input"
            />
          </label>
        </div>
        <button
          data-testid="save-button"
          type="submit"
          className="save-btn"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
