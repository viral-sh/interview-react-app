import { findAll, findById } from './db'

async function fetchEmployees (size = 3, sortBy = 'firstName') {
  const allEmps = await findAll()
  let empList = allEmps.slice(0, size)
  empList.sort((ob1, ob2) => {
    return ob1[sortBy] > ob2[sortBy]
  })
  return empList
}

async function findEmployeeById (id) {
  const result = await findById(id)
  return result
}

module.exports = {
  fetchEmployees,
  findEmployeeById
}
