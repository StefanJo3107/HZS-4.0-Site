import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        userId: this.props.userId || null
    }
  }

  render() {
    const { userId } = this.state;

    return (
        <div className="user-form-container">
        <form>
          <div className="row">
            <div className="col-25">
              <label for="ime-prezime">Ime i prezime:</label>
            </div>
            <div className="col-75">
              <input type="text" id="ime-prezime" name="ime-prezime"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="grad">Grad:</label>
            </div>
            <div className="col-75">
            <input type="text" id="grad" name="grad"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="srednja-skola">Srednja škola:</label>
            </div>
            <div className="col-75">
              <input type="text" name="srednja-skola" id="srednja-skola" />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="razred">Razred:</label>
            </div>
            <div className="col-75">
              <input type="text" name="razred" id="razred"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="grad">Grad:</label>
            </div>
            <div className="col-75">
              <input type="text" name="grad" id="grad"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="broj-telefona">Broj telefona:</label>
            </div>
            <div className="col-75">
              <input type="text" name="broj-telefona" id="broj-telefona"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="e-mail">E-mail adresa:</label>
            </div>
            <div className="col-75">
              <input type="text" name="e-mail" id="e-mail"/>
            </div>
          </div>         
        </form>
      </div>
    );
  }
}

export default UserForm;