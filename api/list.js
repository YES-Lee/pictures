const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  const filesList = fs.readdirSync(path.resolve(__dirname, '../public/images'), { encoding: 'utf-8' })
  const result = filesList.map(item => ({
    filename: item,
    path: `/images/${item}`
  }))

  res.json(result)
}
