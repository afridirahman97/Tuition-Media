import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    location: '',
    salary: '',
    week:'',
    subs:'',
    address:'',
    phone:'',
    trial:'off',
    description:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <div className="row">
         <div className="col s12">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Post Tutor Request</h5>
          <div className="input-field">
            <input type="text" id='location' onChange={this.handleChange} />
            <label htmlFor="location">Tuition Location</label>
          </div>
          <div className="input-field">
            <input type="text" id='salary' onChange={this.handleChange} />
            <label htmlFor="salary">Salary</label>
          </div>
          <div className="input-field">
            <input type="text" id='week' onChange={this.handleChange} />
            <label htmlFor="week">How many days a week</label>
          </div>
          <div className="input-field">
            <input type="text" id='subs' onChange={this.handleChange} />
            <label htmlFor="subs">Subject/Subjects</label>
          </div>
          <div className="input-field">
            <input type="number" id='phone' onChange={this.handleChange} />
            <label htmlFor="phone">Contact Number</label>
          </div>
          <div className="input-field">
            <input type="checkbox" id='trial' onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'Is there a trial class request'}<br></br>
          </div>
          <div className="input-field">
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Tuition Description</label>
          </div>
          <div className="input-field">
            <textarea id="address" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="address">Tuition address</label>
          </div>
          <div className="input-field">
            <button className="btn blue darken-3">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div> 

    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)