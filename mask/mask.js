const Mask = {
  apply(input, func) {
    setTimeout(function () {
      input.value = Mask[func](input.value)
    }, 1)
  },

  formatBRL(value) {
    value = value.replace(/\D/g, "")

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)
  },

  formatPercentage(value) {
    let divide = 10000
    const arr = value.split(',')
    console.log('arr', arr)

    if (arr[1]) {
      const decimals = arr[1].split('%')[0].length
      console.log('hi', value, decimals)
      if (decimals > 2)
        divide = Math.pow(10, decimals + 2)
    }

    value = value.replace(/\D/g, "")

    return new Intl.NumberFormat('pt-BR', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    }).format(value / divide)
  },

  formatCPF(value) {
    value = value.replace(/\D/g, '').slice(0, 11)
    value = value.replace(/^(\d{3})(\d)/g, '$1.$2')
    value = value.replace(/(.\d{3})(\d)/g, '$1.$2')
    value = value.replace(/(.\d{3})(\d)/g, '$1-$2')
    return value
  }
}
