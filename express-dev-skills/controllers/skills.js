const skill = require('../models/skill')

const index = (req, res) => {
  const skills = skill.getAll()
  res.render('skills/index', { skills })
}

module.exports = {
  index
}
