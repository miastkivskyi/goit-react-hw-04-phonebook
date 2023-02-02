import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ id: nanoid(), ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label htmlFor={this.loginInputId}>
            <h2 className={css.titleForm}>Name</h2>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.loginInputId}
              value={this.state.name}
              onChange={this.handleChange}
              className={css.inputForm}
            />
          </label>

          <label htmlFor={this.loginInputId}>
            <h2 className={css.titleForm}>Number</h2>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.loginInputId}
              value={this.state.number}
              onChange={this.handleChange}
              className={css.inputForm}
            />
          </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
