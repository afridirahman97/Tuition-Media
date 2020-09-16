export const createConfirm = (confirm) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();     
      var parts = window.location.pathname.split('/');
      var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
      var secondlast = parts.pop() || parts.pop() || parts.pop();
      const tuitionId=lastSegment;
      const tuitorId=secondlast;
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('confirms').add({
        ...confirm,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName, 
        authorInitials: profile.initials,
        authorId: authorId,
        tuitorId: tuitorId,
        tuitionId: tuitionId,
        createdAt: new Date().toString()
      }).then(() => {
        dispatch({ type: 'CREATE_CONFIRM_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_CONFIRM_ERROR' }, err);
      });
    }
  };