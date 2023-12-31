import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form-box">

        <label htmlFor="cardName">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            id="cardName"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição:
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            className="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          Ataque:
          <input
            data-testid="attr1-input"
            type="number"
            id="cardAttr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Defesa:
          <input
            data-testid="attr2-input"
            type="number"
            id="cardAttr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Especial:
          <input
            data-testid="attr3-input"
            type="number"
            id="cardAttr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            id="cardImage"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <div>
          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              id="cardRare"
              name="cardRare"
              className="rarity-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="cardTrunfo">
            Super Trunfo:
            { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              data-testid="trunfo-input"
              type="checkbox"
              id="cardTrunfo"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              className="checkbox-input"
            /> }
          </label>
        </div>
        <button
          data-testid="save-button"
          type="submit"
          className="save-btn"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
