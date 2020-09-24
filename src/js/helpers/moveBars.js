export function showBars (bars) {
  let i = 0

  bars.forEach(bar => {
    setTimeout(() => {
      bar.classList.add('show')
    }, i)

    i += 500
  })
}

export function retractBars (bars) {
  bars.forEach(bar => {
    bar.classList.remove('show')
  })
}
