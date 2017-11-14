import axios from 'axios'

export const fetchEmployees = async ({ sortBy, size }) => {
  try {
    console.log('fetching employees from service')
    let result = await axios.get('/api/employees', {
      params: {
        sortBy,
        size
      }
    })
    return result.data.empList
  } catch (error) {
    console.error('Oops something went wrong', error)
  }
}
