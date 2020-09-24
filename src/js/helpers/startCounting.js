export function startCounting (numbers) {
  let i = 0

  numbers.forEach(number => {
    setTimeout(() => {
      number.start()
    }, i)
    i += 500
  })
}
