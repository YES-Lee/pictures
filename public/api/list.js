const fs = require('fs')

module.exports = (req, res) => {
  const filesList = fs.readdirSync('../images', { encoding: 'utf-8' })

  res.status(200).send(filesList.map(item => ({
    filename: item,
    path: `/images/${item}`
  })))
}
