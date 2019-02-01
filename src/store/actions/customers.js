import { CUSTOMERS_GET } from '../definitions'

const getCustomers = (isReload = true) => {
  let customers = {
    total_count: 1000,
    data: [
      {
        "_id": "5c233361360ff1397df78c0e",
        "username": "Byrd",
        "given_name": "Clements",
        "surname": "Steele",
        "type": 1,
        "created": "August 21, 2017 7:06 PM",
        "registered": "Monday, October 6, 2014 8:27 PM",
        "last_sign_in": "Sunday, July 29, 2018 11:31 PM",
        "national_id": "fc0271b3-403b-4e79-acd8-2cd69c2165fc",
        "mobile_phone": "(980) 439-2032",
        "home_phone": "(899) 562-3129"
      },
      {
        "_id": "5c233361cb988e8824579a5d",
        "username": "Richards",
        "given_name": "Horn",
        "surname": "Hays",
        "type": 1,
        "created": "December 1, 2018 9:54 AM",
        "registered": "Tuesday, February 10, 2015 9:14 PM",
        "last_sign_in": "Saturday, July 28, 2018 7:15 PM",
        "national_id": "9f4e42b5-01d6-4570-977a-df7294775f28",
        "mobile_phone": "(952) 547-3757",
        "home_phone": "(857) 599-3647"
      },
      {
        "_id": "5c233361d24070cd691e9c38",
        "username": "Dina",
        "given_name": "Serena",
        "surname": "Wiley",
        "type": 2,
        "created": "May 22, 2017 2:41 AM",
        "registered": "Sunday, May 20, 2018 4:02 AM",
        "last_sign_in": "Tuesday, December 11, 2018 12:04 PM",
        "national_id": "009bc77c-fcdd-40f8-92ba-706a2f162477",
        "mobile_phone": "(886) 424-2425",
        "home_phone": "(858) 532-2346"
      },
      {
        "_id": "5c23336134fa20604ccfa81f",
        "username": "Beatrice",
        "given_name": "Ana",
        "surname": "Mccullough",
        "type": 2,
        "created": "August 2, 2017 10:29 AM",
        "registered": "Thursday, September 28, 2017 1:47 AM",
        "last_sign_in": "Thursday, June 21, 2018 12:04 AM",
        "national_id": "b45085ba-f614-4d5f-9761-5488099cb1f4",
        "mobile_phone": "(982) 549-2485",
        "home_phone": "(847) 424-2061"
      },
      {
        "_id": "5c233361d11905ed15fa4877",
        "username": "Hernandez",
        "given_name": "Ladonna",
        "surname": "Patel",
        "type": 2,
        "created": "November 20, 2015 2:14 AM",
        "registered": "Wednesday, May 6, 2015 8:45 AM",
        "last_sign_in": "Saturday, May 26, 2018 7:06 AM",
        "national_id": "40ad1061-1b2b-4d15-8f22-3687725e6c29",
        "mobile_phone": "(987) 407-2069",
        "home_phone": "(957) 538-2450"
      },
      {
        "_id": "5c23336165702d68f3bceb46",
        "username": "Emily",
        "given_name": "Ball",
        "surname": "Pate",
        "type": 1,
        "created": "August 16, 2015 9:38 PM",
        "registered": "Monday, December 18, 2017 10:17 AM",
        "last_sign_in": "Tuesday, February 6, 2018 11:31 PM",
        "national_id": "a227cb4d-3844-4d35-b132-90abcd76b25f",
        "mobile_phone": "(875) 445-2715",
        "home_phone": "(863) 466-2124"
      },
      {
        "_id": "5c233361d3416cb7146e4f21",
        "username": "Reyna",
        "given_name": "Benson",
        "surname": "Cook",
        "type": 2,
        "created": "July 14, 2014 2:26 PM",
        "registered": "Friday, April 10, 2015 6:28 AM",
        "last_sign_in": "Sunday, December 9, 2018 12:11 AM",
        "national_id": "fff1ed17-deab-4b35-85d1-1f9151360fd6",
        "mobile_phone": "(875) 515-2705",
        "home_phone": "(848) 475-2987"
      },
      {
        "_id": "5c2333619233b6eb75986f56",
        "username": "Mcdaniel",
        "given_name": "Wendy",
        "surname": "Figueroa",
        "type": 2,
        "created": "June 9, 2016 6:07 PM",
        "registered": "Sunday, November 23, 2014 1:09 AM",
        "last_sign_in": "Tuesday, September 18, 2018 5:49 PM",
        "national_id": "5d1f280b-9655-4f34-b96e-69b5fd20ce0e",
        "mobile_phone": "(961) 554-3596",
        "home_phone": "(942) 514-3507"
      },
      {
        "_id": "5c23336178e75d21fdc82a6f",
        "username": "Dawn",
        "given_name": "Potts",
        "surname": "Bruce",
        "type": 1,
        "created": "July 14, 2017 5:55 PM",
        "registered": "Wednesday, July 29, 2015 5:44 AM",
        "last_sign_in": "Wednesday, December 12, 2018 7:29 PM",
        "national_id": "f259d0dd-4098-48f3-8110-f2dd8e56e083",
        "mobile_phone": "(886) 578-3143",
        "home_phone": "(855) 598-3560"
      },
      {
        "_id": "5c2333611469b33a9cd4b0d8",
        "username": "Elvia",
        "given_name": "Peterson",
        "surname": "Chapman",
        "type": 2,
        "created": "June 22, 2018 4:17 PM",
        "registered": "Sunday, April 13, 2014 7:03 PM",
        "last_sign_in": "Friday, June 8, 2018 7:07 PM",
        "national_id": "96cd5318-1679-4610-a0bc-214154c437fa",
        "mobile_phone": "(966) 597-2550",
        "home_phone": "(918) 478-3135"
      }
    ]
  }

  const customerList = customers.data.map( d => {
    const temp = {
      name : d.given_name + " " + d.surname,
      username : d.username,
      type: d.type,
      created: d.created
    }
    return temp
  })
  
  return dispatch => {
      dispatch({
        type: CUSTOMERS_GET,
        total_count: customers.total_count,
        data: customerList,
        isReload
      })
  }
}

export { getCustomers }
