import React, { Component } from 'react';
import UserForm from '../UserForm/UserForm';
import "./UserFormRender.scss";

class UserFormRender extends Component {
  constructor(props){
    super(props);
    this.state = {
        numberOfUsers: 3
    }
  }

    changeSelect = (e) => {
        this.setState({numberOfUsers: e.target.value})
    }
    
    renderForm = numberOfUsers => {
        let tempArray = []
        for (let i = 0; i < numberOfUsers; i++) {
            tempArray.push(numberOfUsers[i])
          }
          return tempArray.map(item => {
              return(
                  <UserForm userId={item}/>
              )
          })
          
    }

  render() {
    const { numberOfUsers } = this.state;

    return (
        <div className="user-form-render">    
        <h1 className="user-form-naslov"><span className="user-form-naslov-border">POJEDINAČN</span>I PODACI</h1>
        <form>
            <div className="row">
                <div className="col-25">
                    <label for="number-of-users">Izaberite broj članova:</label>
                </div>
                <div className="col-75">
                    <select name="number-of-users" id="number-of-users" value={numberOfUsers} onChange={ (e) =>  this.changeSelect(e) }>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
            </div>
        </form>
        {numberOfUsers && this.renderForm(numberOfUsers)}
        </div>
    );
  }
}

export default UserFormRender;