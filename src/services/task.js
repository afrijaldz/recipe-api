const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const initialData = {
  recipe: [],
}

db.defaults(initialData).write()

exports.get = () => (
  db.get('recipe').value()
)

exports.show = (id) => (
  db.get('recipe')
    .find({ id })
    .value()
)

exports.save = (recipe) => (
  db.get('recipe')
    .push(recipe)
    .write()
)

exports.update = (id, obj) => (
  db.get('reciipe')
    .find({ id })
    .assign({ obj })
    .write()
)

exports.remove = (id) => (
  db.get('recipe')
    .remove({ id })
    .write()
)