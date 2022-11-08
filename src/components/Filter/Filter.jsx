import PropTypes from 'prop-types';

export const Filter =({onInput, filter})=> {
  
    return (
      <form action="" className="w-50">
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="filter" className="form-label">
            Find contacts by name
          </label>
          <input
            onChange={onInput}
            value={filter}
            type="text"
            className="form-control"
            name="filter"
            id="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            Name may contain only letters, apostrophe, dash and spaces. For
            example Adrian, Jacob Mercer, Charles de Batz de Castelmore
            d'Artagnan.
          </div>
        </div>
      </form>
    );
  }


Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
