window.onload = () => {
  const menuBtn = document.getElementById('menuBtn')
  const closeBtn = document.getElementById('closeBtn')

  function openMenu () {
    const nav = document.getElementById('nav')

    nav.classList.add('show')
  }

  function closeMenu () {
    const nav = document.getElementById('nav')

    nav.classList.remove('show')
  }

  menuBtn.addEventListener('click', openMenu)
  closeBtn.addEventListener('click', closeMenu)
}
