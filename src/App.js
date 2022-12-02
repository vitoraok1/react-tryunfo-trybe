import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cards: [],
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validateForms);
  };

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    if (cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0) {
      return true;
    }
  };

  validateAttributes = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxSumAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const sumAttr = parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10);

    if (parseInt(cardAttr1, 10) >= minAttr
     && parseInt(cardAttr1, 10) <= maxAttr
     && parseInt(cardAttr2, 10) >= minAttr
     && parseInt(cardAttr2, 10) <= maxAttr
     && parseInt(cardAttr3, 10) >= minAttr
     && parseInt(cardAttr3, 10) <= maxAttr
     && sumAttr <= maxSumAttr
    ) {
      return true;
    }
  };

  validateForms = () => {
    if (this.validateInputs() && this.validateAttributes()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  saveCard = (event) => {
    event.preventDefault();

    const {
      cards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardProp = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cards.every((card) => (card.hasTrunfo))) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prevState) => ({
      cards: [...prevState.cards, cardProp],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  removeCard = (selectedCard) => {
    const { cards } = this.state;

    this.setState({ cards: cards.filter((card) => card !== selectedCard) });

    if (selectedCard.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  createCard = () => {
    const { cards } = this.state;

    return (
      cards.map((card) => (
        <div key={ card.cardName }>
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
          <button
            type="button"
            data-testid="delete-button"
            onClick={ () => this.removeCard(card) }
          >
            Excluir
          </button>
        </div>
      ))
    );
  };

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
    } = this.state;

    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <h2>Crie a sua carta</h2>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveCard }
          onInputChange={ this.handleChange }
        />
        <h2>Preview</h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { this.createCard() }
      </div>
    );
  }
}

export default App;
