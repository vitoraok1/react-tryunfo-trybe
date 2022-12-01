import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
