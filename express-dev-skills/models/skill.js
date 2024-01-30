let nextId = 0
const skills = [
  {
    id: nextId++,
    name: 'HTML'
  },
  {
    id: nextId++,
    name: 'CSS'
  },
  {
    id: nextId++,
    name: 'JavaScript'
  },
  {
    id: nextId++,
    name: 'Node.js'
  },
  {
    id: nextId++,
    name: 'React.js'
  }
]

const getAll = () => {
  return skills
}

const getOne = (id) => {
  return skills.find((skill) => {
    return skill.id === parseInt(id)
  })
}

const create = (skill) => {
  skill.id = nextId++
  skills.push(skill)
}

const deleteSkill = (id) => {
  let skillIndex = skills.findIndex((skill) => skill.id === parseInt(id))
  skills.splice(skillIndex, 1)
}

const update = (id, newSkill) => {
  const current = skills.find((skill) => skill.id === parseInt(id))
  current.name = newSkill.name
}

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteSkill,
  update
}
