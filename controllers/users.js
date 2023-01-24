const users = require('../data/users')
const sampleUser = require('../data/sampleUser')

module.exports = {
    list: (req,res) => {
      if (!users) {
        // no users, throw error
        return res.status(404).send('No users found')
      }
        return res.send(users)
    },

    show: (req,res) => {
        const grabId = req.params.id
        if (!users[grabId -1]) {
          // no users, throw error
          return res.status(404).send(`User ${grabId} not found`)
        }
        res.send(users[grabId -1])
    }, 

    create: (req,res) => {
        const record = {
          id: users[users.length - 1].id +1,
          ...sampleUser
        }
        users.push(record)
        return res.json(record)
      },

      update: (req,res) => {
        const grabId = req.params.id;
        if (!users[grabId -1]) {
          // no users, throw error
          res.status(404).send(`User ${grabId} not found`)
        }
        const newBody = {
          ...sampleUser
        }
        return res.json(users[grabId -1] = newBody)
      },

      delete: (req,res) => {
        const grabId = req.params.id;
        const idIndex = users.findIndex(user => user === users[grabId -1])
        if (!users[grabId -1]) {
          // no users, throw error
          res.status(404).send(`User ${grabId} not found`)
        }
        users.splice(idIndex, 1)
        return res.json(users)
      }
}