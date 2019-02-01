import {
  USER_DETAIL_GET,
} from '../definitions'

  const getUserDetail = (id) => {
    return (dispatch) => {

        // console.log('getUser filterUser ', filterUser);

        let userDetail = {
          id: '001',
          role: 'Administrator',
          departement: 'Marketing',
          employee_no: '1501158022',
          given_name: 'Christopher',
          surname: 'Robin',
          username: 'TIS_001',
          status: 'Unlocked',
        };


      dispatch({
        type: USER_DETAIL_GET,
        userDetail
      })
    }
  }

export { 
  getUserDetail,
 }