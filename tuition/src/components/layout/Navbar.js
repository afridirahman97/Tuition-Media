import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import styled from 'styled-components';


const Check = styled.div`
@media (max-width: 500px) {
  margin-right:1px;
  align-items: flex-start;
}
`;

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  const stylus ={
    paddingRight:'50px'
   }

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
          
        {/*<Link to='/' className="brand-logo"><Check>Tuition</Check></Link> */}
        {links}
      </div>
      
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)