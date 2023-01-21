const users = require('../data/users')
const sampleUser = require('../data/sampleUser')

module.exports = {
    list: (req,res) => {
        return res.send(users)
    },
    show: (req,res) => {
        const grabId = req.params.id
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
        const newBody = {
          ...sampleUser
        }
        return res.json(users[grabId -1] = newBody)
      },
      delete: (req,res) => {
        const grabId = req.params.id;
        const idIndex = users.findIndex(user => user === users[grabId -1])
        users.splice(idIndex, 1)
        return res.json(users)
        // const filteredUsers = users.filter(user => user !== users[grabId-1])
        // return res.json(filteredUsers)

      }
      
}