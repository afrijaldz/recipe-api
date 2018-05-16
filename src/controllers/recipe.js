const task = require('../services/task')
const uuid = require('uuid')

exports.index = (req, res) => {
  const data = task.get('recipe')

  res.json({
    status: 'success',
    data,
  })
}

exports.show = async (req, res) => {
  const id = req.params.id
  const data = await task.show(id)

  res.json({
    status: 'success',
    data,
  })
}

exports.store = async (req, res) => {
  const obj = req.body
  obj.id = uuid()

  const data = await task.save(obj)
  res.json({
    status: 'success',
    data
  })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const obj = req.body
  
  const data = await task.update(id, obj)
  res.json({
    status: 'success',
    data
  })
}

exports.destroy = async (req, res) => {
  const id = req.params.id

  const data = await task.remove(id)
  res.json({
    status: 'data successfully deleted.',
    data,
  })
}