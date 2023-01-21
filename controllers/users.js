const users = require('../data')

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
          ...req.body
        }
        users.push(record)
        return res.json(record)
      }
}