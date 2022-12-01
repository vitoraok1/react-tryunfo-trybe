import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <section className="card-render">
        <p data-testid="name-card">
          Name:
          { cardName }
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
          Descrição:
          { cardDescription }
        </p>
        <p data-testid="attr1-card">
          Ataque:
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Defesa:
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Especial:
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">
          Raridade:
          { cardRare }
        </p>
        {
          cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
