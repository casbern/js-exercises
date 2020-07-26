const p = Promise.resolve('house')
p.then(result => console.log(result))

const e = Promise.reject(new Error('reason for rejection'))
p.catch(error => console.log(error))