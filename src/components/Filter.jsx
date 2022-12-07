import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      trunfoFilter,
      onInputChange } = this.props;
    return (
      <div className="search-inputs">
        <h2 className="filtered-title">Cartas filtradas:</h2>
        <h3 className="search-title">
          Pesquisar carta
          <br />
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            value={ nameFilter }
            onChange={ onInputChange }
            className="input-search"
            disabled={ !!trunfoFilter }
          />
        </h3>
        <label htmlFor="rareFilter">
          <select
            className="rarity-input-search"
            name="rareFilter"
            id="rareFilter"
            value={ rareFilter }
            onChange={ onInputChange }
            data-testid="rare-filter"
            disabled={ !!trunfoFilter }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
            <option value="todas">Todas</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfo-input"
            checked={ trunfoFilter }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
            className="checkbox-supertrunfo"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
