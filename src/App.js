import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
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
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
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

  verifyTrunfo = () => {
    const { cards } = this.state;

    if (cards.some((card) => (card.cardTrunfo))) {
      this.setState({ hasTrunfo: true });
    }
  };

  saveCard = (event) => {
    event.preventDefault();

    const {
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
    }), this.verifyTrunfo);
  };

  removeCard = (selectedCard) => {
    const { cards } = this.state;

    this.setState({ cards: cards.filter((card) => card !== selectedCard) });

    if (selectedCard.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  render() {
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
      hasTrunfo,
      isSaveButtonDisabled,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;

    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <div className="flex-container">
          <div className="form-container">
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
          </div>
          <div className="preview-card">
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
          </div>
        </div>
        <div>
          <Filter
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            onInputChange={ this.handleChange }
          />
        </div>
        <div className="saved-section">
          { cards.length > 0 && cards
            .filter((card) => card.cardName.includes(nameFilter))
            .filter((card) => (
              rareFilter === 'todas' ? card : card.cardRare === rareFilter))
            .filter((card) => (card.cardTrunfo ? card : card.cardTrunfo === trunfoFilter))
            .map((card) => (
              <div key={ card.cardName } className="preview-card">
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
                  className="delete-btn"
                  onClick={ () => this.removeCard(card) }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
        <footer>
          Criado por Vitor Aoki, 2022.
        </footer>
      </div>
    );
  }
}

export default App;
