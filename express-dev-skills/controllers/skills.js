const skillModel = require('../models/skill')

const index = (req, res) => {
  const skills = skillModel.getAll()
  res.render('skills/index', { skills })
}

const show = (req, res) => {
  const id = req.params.id
  const skill = skillModel.getOne(id)
  console.log(id)
  res.render('skills/show', { skill })
}

module.exports = {
  index,
  show
}
