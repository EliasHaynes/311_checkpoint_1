const sampleUser = require('../data')

module.exports = {
    list:(req,res) => {
        return res.send(sampleUser)
      }
}