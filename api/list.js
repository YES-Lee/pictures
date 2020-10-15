const fs = require('fs')

module.exports = (req, res) => {
  const filesList = fs.readdirSync('../images', { encoding: 'utf-8' })
  const result = filesList.map(item => ({
    filename: item,
    path: `/images/${item}`
  }))

  res.json(result)
}
