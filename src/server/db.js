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
  salary: '$20,000'
})
employees.push({
  id: '102',
  firstName: 'danerys',
  lastName: 'targeryn',
  gender: 'female',
  salary: '$25,000'
})

employees.push({
  id: '103',
  firstName: 'tyrion',
  lastName: 'lannister',
  gender: 'male',
  salary: '$17,000'
})

employees.push({
  id: '104',
  firstName: 'petyr',
  lastName: 'baelish',
  gender: 'male',
  salary: '$12,000'
})

employees.push({
  id: '105',
  firstName: 'arya',
  lastName: 'stark',
  gender: 'female',
  salary: '$8,000'
})

employees.push({
  id: '106',
  firstName: 'cersei',
  lastName: 'baratheon',
  gender: 'female',
  salary: '$50,000'
})

employees.push({
  id: '107',
  firstName: 'jamie',
  lastName: 'lannister',
  gender: 'male',
  salary: '$25,000'
})

employees.push({
  id: '98',
  firstName: 'varys',
  lastName: '',
  gender: 'male',
  salary: '$15,000'
})

employees.push({
  id: '99',
  firstName: 'davos',
  lastName: 'seaworth',
  gender: 'male',
  salary: '$200'
})

employees.push({
  id: '108',
  firstName: 'bran',
  lastName: 'stark',
  gender: 'male',
  salary: '$25,000'
})

module.exports = {
  findAll: async () => employees,
  findById: async (id) => find(employees, 'id')
}

// /////////////////////////////////////////////
// DO NOT MODIFY THIS FILE /////////////////////
// /////////////////////////////////////////////
