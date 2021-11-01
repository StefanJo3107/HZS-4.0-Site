import React from 'react';

const UserForm = (props) => {

  const errorMessageStyle = {
    color: '#E50914',
    margin: '0.25rem'
  };
  console.log(props.errors);
  return(
    
    <div className="user-form-container">
    <div className="row">
      <div className="col-25">
        <label for="ime">Ime i prezime:</label>
      </div>
      <div className="col-75">
        <input type="text" 
        id="ime" 
        name="ime"
        value={props.values.clanovi[props.indeks].ime}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        />
        
        {props.errors.clanovi[props.indeks] != null && props.errors.clanovi[props.indeks].ime  && props.touched.clanovi[props.indeks].ime ? 
          <span style={errorMessageStyle}>{ props.errors.clanovi[props.indeks].ime }</span>
        :null}
      </div>
    </div>
    {/* <div className="row">
      <div className="col-25">
        <label for="grad">Grad:</label>
      </div>
      <div className="col-75">
      <input type="text" 
      id="grad"
      name="grad"
      value={props.values.clanovi[props.indeks].grad}
        onChange={props.handleChange}
        onBlur={props.handleBlur} 
       />
      {props.errors.clanovi[props.indeks].grad  && props.touched.clanovi[props.indeks].grad ? 
          <span style={errorMessageStyle}>{ props.errors.grad }</span>
        :null}
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="srednja">Srednja škola:</label>
      </div>
      <div className="col-75">
        <input type="text" 
        name="srednja"
         id="srednja" 
         value={props.clanovi[props.indeks].srednja}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
         />
         {props.errors.clanovi[props.indeks].srednja  && props.touched.clanovi[props.indeks].srednja ? 
          <span style={errorMessageStyle}>{ props.errors.clanovi[props.indeks].srednja }</span>
        :null}
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="razred">Razred:</label>
      </div>
      <div className="col-75">
        <input type="text" 
        name="razred" 
        id="razred"
        value={props.clanovi[props.indeks].razred}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        />
        {props.errors.clanovi[props.indeks].razred  && props.touched.clanovi[props.indeks].razred ? 
          <span style={errorMessageStyle}>{ props.errors.clanovi[props.indeks].razred }</span>
        :null}
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="brojTelefona">Broj telefona: </label>
      </div>
      <div className="col-75">
        <input type="text" 
        name="brojTelefona" 
        id="brojTelefona"
        value={props.clanovi[props.indeks].brojTelefona}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        />
        {props.errors.clanovi[props.indeks].brojTelefona  && props.touched.clanovi[props.indeks].brojTelefona ? 
          <span style={errorMessageStyle}>{ props.errors.clanovi[props.indeks].brojTelefona }</span>
        :null}
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="email">E-mail adresa:</label>
      </div>
      <div className="col-75">
        <input type="text" 
        name="email" 
        id="email"
        value={props.clanovi[props.indeks].email}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        />
        {props.errors.clanovi[props.indeks].email  && props.touched.clanovi[props.indeks].email ? 
          <span style={errorMessageStyle}>{ props.errors.clanovi[props.indeks].email }</span>
        :null}
      </div> */}
    {/* </div>          */}
</div>
)
}






export default UserForm;