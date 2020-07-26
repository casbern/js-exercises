async function timeout(ms, x) {
  return new Promise((resolve, reject) => setTimeout(() => resolve(x), ms));
}
async function main() {
  let res
  res = await timeout(3000, 1)
  console.log(res)
  res = await timeout(1000, 2)
  console.log(res)
}
main()