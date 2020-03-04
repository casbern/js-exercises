function date(timestamp) {
  const today = new Date() //* Dia atual
  const birth = new Date(timestamp) //* Data do timestamp passado

  let age = today.getFullYear() - birth.getFullYear()
  const month = today.getMonth() - birth.getMonth()

  if(month < 0 || month == 0 && today.getDate() < birth.getDate()) {
    age = age - 1
  }
  return age

  
}

date(1583271178634);