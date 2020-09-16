export const createReq = (req) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('reqs').add({
        ...req,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_REQUEST_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_REQUEST_ERROR' }, err);
      });
    }
  };