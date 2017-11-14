import { publicRouter } from './router'
import { fetchEmployees } from './db-service'
const debug = require('debug')('api:emp')

publicRouter.get('/api/employees', async (req, res) => {
  debug('received request to fetch employees', req.params)
  let { size, sortBy } = req.query
  const empList = await fetchEmployees(size, sortBy)
  res.status(200).send({ empList })
})
