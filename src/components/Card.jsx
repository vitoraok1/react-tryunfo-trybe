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
        <p>
          <span data-testid="name-card">
            { cardName }
          </span>
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p>
          Descrição:
          <span data-testid="description-card">
            { cardDescription }
          </span>
        </p>
        <p>
          Ataque:
          <span data-testid="attr1-card">
            {cardAttr1}
          </span>
        </p>
        <p>
          Defesa:
          <span data-testid="attr2-card">
            {cardAttr2}
          </span>
        </p>
        <p>
          Especial:
          <span data-testid="attr3-card">
            {cardAttr3}
          </span>
        </p>
        <p>
          <span data-testid="rare-card" className="rarity">
            {cardRare}
          </span>
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
