import React from 'react';
import PropTypes from 'prop-types';

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
        <p className="card-name">
          <span data-testid="name-card">
            { cardName }
          </span>
        </p>
        <div className="image-section">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          {
            cardTrunfo
            && <p data-testid="trunfo-card" className="trunfo">Super Trunfo</p>
          }
        </div>
        <p className="descr-card">
          <span data-testid="description-card">
            { cardDescription }
          </span>
        </p>
        <p className="card-attr1">
          Ataque:
          <span data-testid="attr1-card" className="value-attr1">
            {cardAttr1}
          </span>
        </p>
        <p className="card-attr2">
          Defesa:
          <span data-testid="attr2-card" className="value-attr2">
            {cardAttr2}
          </span>
        </p>
        <p className="card-attr3">
          Especial:
          <span data-testid="attr3-card" className="value-attr3">
            {cardAttr3}
          </span>
        </p>
        <p className="card-rarity">
          <span data-testid="rare-card">
            {cardRare}
          </span>
        </p>
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
