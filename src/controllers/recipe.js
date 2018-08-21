const task = require('../services/task')
const uuid = require('uuid')

exports.index = (req, res) => {
  const data = task.get('recipe')

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.show = async (req, res) => {
  const id = req.params.id
  const data = await task.show(id)

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.store = async (req, res) => {
  const obj = req.body
  obj.id = uuid()

  await task.save(obj)

  res.json({
    status: 'OK',
    message: 'success',
    data: obj
  })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const obj = req.body
  
  await task.update(id, obj)

  const data = await task.show(id)
  
  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.destroy = async (req, res) => {
  const { id } = req.params

  await task.remove(id)

  res.json({
    status: 'OK',
    message: 'data successfully deleted.',
    data: null,
  })
}