import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


const OwnList = ({users, auth }) => {
  var go = auth.uid;
  return (
    <div className="user-list section">
      { users && users.map(user => {
        var match = user.id;
        var nameF = user.firstName;
        var nameL = user.lastName;
        var email = auth.email;
        var study = user.study;
        var locations = user.locations;
        var subjects = user.subjects;
        var tenResult = user.tenResult;
        var twelveResult = user.twelveResult;
        var department = user.department;
        
        if( go == match){
        return (
          <div className="row">
           <div className="col s12">
            <div className="infos">
         <p><b style={{fontWeight: "bold"}}>Name  : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{nameF} {nameL}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Email : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{email}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Current Studying at : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{study}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Department : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{department}</b></span></p>  
         <p><b style={{fontWeight: "bold"}}>Preferred Locations : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{locations}</b></span></p>
         <p><b style={{fontWeight: "bold"}}>Preferred Subjects : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{subjects}</b></span></p> 
         <p><b style={{fontWeight: "bold"}}>SSC/O-Level Result : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{tenResult}</b></span></p> 
         <p><b style={{fontWeight: "bold"}}>HSC/O-Level Result : </b><span className="blue-text"><b style={{fontWeight: "bold"}}>{twelveResult}</b></span></p>          
          </div>
        </div>
      </div>  
        
          )
         }
      })}  
    </div>
  )
}
 

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    
    auth: state.firebase.auth

  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' 
      }
  ])
)(OwnList)