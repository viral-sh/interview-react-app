// /////////////////////////////////////////////
// DO NOT MODIFY THIS FILE /////////////////////
// /////////////////////////////////////////////

import { find } from 'lodash'
const employees = []

employees.push({
  id: '101',
  firstName: 'jon',
  lastName: 'snow',
  gender: 'male',
  salary: '$20,000',
  designation: 'King in the North',
  location: 'Winterfell'
})
employees.push({
  id: '102',
  firstName: 'danerys',
  lastName: 'targeryn',
  gender: 'female',
  salary: '$25,000',
  designation: 'Lady Regant of the Seven Kingdoms',
  location: 'Dragonstone'
})

employees.push({
  id: '103',
  firstName: 'tyrion',
  lastName: 'lannister',
  gender: 'male',
  salary: '$17,000',
  designation: 'Hand of the Queen',
  location: 'Dragonstone'
})

employees.push({
  id: '104',
  firstName: 'petyr',
  lastName: 'baelish',
  gender: 'male',
  salary: '$12,000',
  designation: 'Lord protector of Vale',
  location: null
})

employees.push({
  id: '105',
  firstName: 'arya',
  lastName: 'stark',
  gender: 'female',
  salary: '$8,000',
  designation: 'Lady of Winterfell',
  location: 'Winterfell'
})

employees.push({
  id: '106',
  firstName: 'cersei',
  lastName: 'baratheon',
  gender: 'female',
  salary: '$50,000',
  designation: 'Queen Regent',
  location: "King's Landing"
})

employees.push({
  id: '107',
  firstName: 'jamie',
  lastName: 'lannister',
  gender: 'male',
  salary: '$25,000',
  designation: "Lord Commander of King's guard",
  location: "King's Landing"
})

employees.push({
  id: '98',
  firstName: 'varys',
  lastName: '',
  gender: 'male',
  salary: '$15,000',
  designation: 'Master of Whisperers',
  location: 'Dragonstone'
})

employees.push({
  id: '99',
  firstName: 'davos',
  lastName: 'seaworth',
  gender: 'male',
  salary: '$200',
  designation: 'Knight',
  location: 'Winterfell'
})

employees.push({
  id: '108',
  firstName: 'bran',
  lastName: 'stark',
  gender: 'male',
  salary: '$25,000',
  designation: 'Three Eyed Raven',
  location: 'Winterfell'
})

module.exports = {
  findAll: async () =>
    employees.map(({ id, firstName, lastName, gender, salary }) => ({
      id,
      firstName,
      lastName,
      gender,
      salary
    })),
  findById: async id => find(employees, 'id')
}

// /////////////////////////////////////////////
// DO NOT MODIFY THIS FILE /////////////////////
// /////////////////////////////////////////////
