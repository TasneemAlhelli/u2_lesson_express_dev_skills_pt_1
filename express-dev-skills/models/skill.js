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
  console.log(skills)
}

module.exports = {
  getAll,
  getOne,
  create
}
