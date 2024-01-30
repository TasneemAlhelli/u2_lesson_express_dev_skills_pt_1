const skills = [
  {
    id: 1,
    name: 'HTML'
  },
  {
    id: 2,
    name: 'CSS'
  },
  {
    id: 3,
    name: 'JavaScript'
  },
  {
    id: 4,
    name: 'Node.js'
  },
  {
    id: 5,
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

module.exports = {
  getAll,
  getOne
}
