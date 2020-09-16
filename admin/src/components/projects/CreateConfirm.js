import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConfirm } from '../../store/actions/projectActionsCon'
import { Redirect } from 'react-router-dom'


class CreateConfirm extends Component {

    
  
  state = {
      
    confirmation: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    this.props.createConfirm(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signup'/>
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Post Application</h5>
         
          <div className="input-field">
            <input type="text" id='confirmation' onChange={this.handleChange} />
            <label htmlFor="confirmation">Remarks</label>
          </div>
        
                     
          <div className="input-field">
            <button className="btn blue darken-2">Complete</button>
          </div>
        </form>
      </div>

    )
    }
    
  }


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    confirms : state.firestore.data.confirms
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createConfirm: (confirm) => dispatch(createConfirm(confirm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateConfirm)
