import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'


const commentDetails = (props) => {
  const { user, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  var parts = window.location.pathname.split('/');
  var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
  var secondlast = parts.pop() || parts.pop() || parts.pop();
  if (user) {
    return (
      <div className="container section project-details">
          <div className="row">
         <div className="col s12">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Tutor Details</span>
            <p>Applied for tuition id :<b style={{fontWeight: "bold"}}>{lastSegment}</b></p>
            <p>Name :<b style={{fontWeight: "bold"}}> {user.firstName} {user.lastName}</b></p>
            <p>TutorID :<b style={{fontWeight: "bold"}}>{secondlast}</b></p>
            <p>Studying at :<b style={{fontWeight: "bold"}}> {user.study}</b></p>
            <p>Department :<b style={{fontWeight: "bold"}}> {user.department}</b></p>
            <p>Preferred Subjects :<b style={{fontWeight: "bold"}}> {user.subjects}</b></p>
            <p>Preferred Locations :<b style={{fontWeight: "bold"}}> {user.locations}</b></p>
            <p>SSC/O-level Result :<b style={{fontWeight: "bold"}}> {user.tenResult}</b></p>
            <p>HSC/A-level Result :<b style={{fontWeight: "bold"}}> {user.twelveResult}</b></p>
            
          </div>
          <div className="input-field">
           <Link to={'/confirm/'+secondlast+'/'+lastSegment} ><button className="btn blue darken-3 z-depth-1" >confirm</button></Link>
           </div>
        </div>
      </div>
    </div>
</div> 
    )
  } else {
    return (
      <div className="container center">
        <p>Loading user...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null
  return {
    user: user,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'users'
  }])
)(commentDetails)