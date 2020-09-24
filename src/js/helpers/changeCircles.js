export function showCircles (circles) {
  let i = 0

  circles.forEach(circle => {
    setTimeout(() => {
      circle.classList.add('show')
    }, i)

    i += 500
  })
}
