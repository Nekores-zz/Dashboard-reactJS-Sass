import {
    USERS_GET,
  } from '../definitions'

  const getUSER = () => {
    return (dispatch, getState) => {
      const { filterUser } = getState()

        // console.log('getUser filterUser ', filterUser);

        let users = [];

        if(filterUser.keyword === ''){
          users = [
            {
              id: 1,
              name: 'Billie Holl',
              username: 'billie',
              type: 'TIS',
              role: 'administrator',
              status: 'Locked',
              created_date: '20 Oct 2018 09:00 AM'
            },
            {
              id: 2,
              name: 'Gilda Stoneham',
              username: 'gilda',
              type: 'TIS',
              role: 'administrator',
              status: 'Locked',
              created_date: '20 Oct 2018 010:00 AM'
            }
          ]
        }
        else{
          users = [
            {
              id: 3,
              name: 'Rena Galley',
              username: 'Rena',
              type: 'TIS',
              role: 'User',
              status: 'Locked',
              created_date: '20 Oct 2018 09:00 AM'
            },
          ]
        }

      dispatch({
        type: USERS_GET,
        total_count:users.length,
        isReload:true,
        data:users
      })
    }
  }

export { 
    getUSER,
 }