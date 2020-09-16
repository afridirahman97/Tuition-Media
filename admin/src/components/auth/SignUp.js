import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    study:'',
    department:'',
    subjects:'',
    locations:'',
    tenResult:'',
    twelveResult:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="study">Currently Studying</label>
            <input type="text" id='study' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="department">Department</label>
            <input type="text" id='department' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="tenResult">SSC/O-level results</label>
            <input type="text" id='tenResult' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="twelveResult">HSC/A-level results</label>
            <input type="text" id='twelveResult' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="subjects">Preferred Subjects</label>
            <input type="text" id='subjects' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="locations">Preferred Locations</label>
            <input type="text" id='locations' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue darken-3 z-depth-1">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)