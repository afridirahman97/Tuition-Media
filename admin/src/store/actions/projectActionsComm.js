export const createComment = (comment) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
     // const projectId = getState().firebase.projects;
     var parts = window.location.pathname.split('/');
     var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
     const projectId=lastSegment;
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('comments').add({
        ...comment,
       // projectId: projectId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName, 
        authorInitials: profile.initials,
        authorId: authorId,
        projectId:projectId,
        createdAt: new Date().toString()
      }).then(() => {
        dispatch({ type: 'CREATE_COMMENT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_COMMENT_ERROR' }, err);
      });
    }
  };