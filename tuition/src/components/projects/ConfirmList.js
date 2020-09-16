import React from 'react'
import ConfirmSummary from './ConfirmSummary'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'


const ConfirmList = ({confirms,auth}) => {
    var go = auth.uid;
  
  return (
    <div className="project-list section">
      { confirms && confirms.map(confirm => {
          var match = confirm.tuitorId;
          if( go == match){
        return (
            <div className="checking">
            <ConfirmSummary confirm={confirm} />
            </div>
        )
    }        
  })
  } 
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
  )(ConfirmList)