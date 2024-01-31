const skillModel = require('../models/skill')

const index = (req, res) => {
  const skills = skillModel.getAll()
  res.render('skills/index', { skills })
}

const show = (req, res) => {
  const id = req.params.id
  const skill = skillModel.getOne(id)
  res.render('skills/show', { skill })
}

const newSkill = (req, res) => {
  res.render('skills/new')
}

const create = (req, res) => {
  let newSkill = skillModel.create(req.body)
  res.redirect('/skills')
}

const deleteSkill = (req, res) => {
  let id = req.params.id
  skillModel.delete(id)
  res.redirect('/skills')
}

const edit = (req, res) => {
  let id = req.params.id
  const skill = skillModel.getOne(id)
  res.render('skills/edit', {
    skill
  })
}

const update = (req, res) => {
  let id = req.params.id
  skillModel.update(id, req.body)
  res.redirect(`/skills/${id}`)
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
}
