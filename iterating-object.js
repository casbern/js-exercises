
  const foundTeacher = {
      "id": 1,
      "avatar_url": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "name": "Amelia",
      "birth": 1291161600000,
      "scholarity": "higher_education",
      "class_type": "online",
      "services": "Inglês",
      "created_at": 1584037538320
    }

function foundScholarity (foundTeacher) {
  const scholarity = foundTeacher.scholarity

  let scholarityOptions = {
    high_school: "Ensino Médio Completo",
    higher_education: "Ensino Superior Completo",
    master_degree: "Mestrado",
    doctorate_degree: "Doutorado"
  }

  for (key in scholarityOptions) {
    if (key == scholarity) {
      return scholarityOptions[key]
    }
  }
}

const sch = foundScholarity(foundTeacher)
console.log(sch)