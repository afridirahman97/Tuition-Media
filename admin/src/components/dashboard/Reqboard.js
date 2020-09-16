import React, { Component } from 'react'
import ReqList from '../projects/ReqList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import '../Css/Reqboard.css'




class Reqboard extends Component {
  render() {
    const { reqs, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          
          <div className="col s12 m6">
          <div className="container center">
          <div className="card z-depth-0 tutor-apps">
           <p className="heading">Request for teachers</p>
          </div>
        </div> 
            <ReqList reqs={reqs} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    reqs: state.firestore.ordered.reqs,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reqs', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Reqboard)