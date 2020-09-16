import React, { Component } from 'react'
import OwnList from '../projects/OwnList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Profile extends Component {
  render() {
    const { projects, auth, users } = this.props;
    if (!auth.uid) return <Redirect to='/signup' /> 

    return (    
        <div className="dashboard container">
         <div className="row">
          <div className="col s12">
          <form className="white">
          <div className="container center">
          <p><span className="blue-text"><b style={{fontWeight: "bold",fontSize: 25}}>My Informations</b></span></p>
            </div>
          <OwnList users={users} />
            </form>            
            
         </div>  
        </div>   
       </div> 
     
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users'},
  ])
)(Profile)