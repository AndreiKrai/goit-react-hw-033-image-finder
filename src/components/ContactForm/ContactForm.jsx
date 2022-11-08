import PropTypes from 'prop-types';
import { useState } from 'react';


export default function ContactForm({onSubmit}) {
  // state = { number: '', name: '' };
  const [namber,setNumber]=useState('')
  const [name,setName]=useState('')

  const handleSubmit=e=>{e.preventDefault();
    onSubmit({name:name,number:namber});
  setNumber('');setName('')}
  // handleSubmit = (e) => {e.preventDefault();
  //   this.props.onSubmit(this.state)
  // this.setState({number: '', name: ''})}

  const handleChange=(e)=>{
    const{name}=e.target;
    if(name==='name'){setName(e.target.value)}
  else setNumber(e.target.value)}
  // handleChange  = e => {
  //   const{name}=e.target
  //   console.log(name)
  //    this.setState({ [name]: e.target.value });
  // };

  

    return (
      <form action="" className="w-50" onSubmit={handleSubmit}>
        {/* ставимо на форму onSubmit={handleSubmit} а на батон не вішаємо по */}
        {/* Name input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            className="form-control"
            name="name"
            id="name"
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
        {/* Phone input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleChange}
            value={namber}
            type="tel"
            className="form-control"
            name="number"
            id="phone"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            Phone number must be digits and can contain spaces, dashes,
            parentheses and can start with +
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }


ContactForm.propType={onSubmit:PropTypes.func.isRequired}