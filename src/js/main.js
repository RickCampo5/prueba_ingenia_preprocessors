import '../scss/styles.scss'

// Contact
function getInputValue(input) {
  const inputVaule = document.getElementById(input).value
  return inputVaule
}

function validateName(e) {
  const regex = /^[A-Z]+$/i
  const name = document.getElementById('nameInput')
  const error = document.getElementById('nameError')
  const value = e ? e.target.value : name.value

  if(regex.test(value)) {
    name.classList.remove('error')
    error.classList.remove('show')
    return true
  } else {
    error.classList.add('show')
    name.classList.add('error')
    return false
  } 
}

function validateSurname(e) {
  const regex = /^[A-Z]+$/i
  const error = document.getElementById('surnameError')
  const surname = document.getElementById('surnameInput')
  const value = e ? e.target.value : surname.value

  if(regex.test(value)) {
    error.classList.remove('show')
    surname.classList.remove('error')
    return true
  } else {
    error.classList.add('show')
    surname.classList.add('error')
    return false
  } 
}

function validateEmail(e) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const error = document.getElementById('emailError')
  const email = document.getElementById('emailInput')
  const value = e ? e.target.value : email.value

  if(regex.test(value)) {
    error.classList.remove('show')
    email.classList.remove('error')
    return true
  } else {
    error.classList.add('show')
    email.classList.add('error')
    return false
  }
}

function validatePhone(e) {
  const regex = /^\d{10}$/
  const error = document.getElementById('phoneError')
  const phone = document.getElementById('phoneInput')
  const value = e ? e.target.value : phone.value

  if(regex.test(value)) {
    error.classList.remove('show')
    phone.classList.remove('error')
    return true
  } else {
    error.classList.add('show')
    phone.classList.add('error')
    return false
  }
}

function validateMessage(e) {
  const error = document.getElementById('messageError')
  const message = document.getElementById('messageInput')
  const value = e ? e.target.value : message.value

  if (value) {
    error.classList.remove('show')
    message.classList.remove('error')
    return true
  } else {
    error.classList.add('show')
    message.classList.add('error')
    return false
  }
}

function validateAllInputs() {
  const validName = validateName()
  const validSurname = validateSurname()
  const validEmail = validateEmail()
  const validPhone = validatePhone()
  const validMessage = validateMessage()

  if (validName && validSurname && validEmail && validPhone && validMessage) return true
  return false
}

function fatalErrorMessage() {
  const form = document.getElementById('contactForm')
  const btn = document.getElementById('submitButton')
  const fatalError = document.querySelector('.fatal-error')
  const fatalErroSpan = document.querySelector('.fatal-error-span')

  btn.disabled = true
  form.classList.add('disabled')
  fatalError.classList.add('show')
  fatalErroSpan.classList.add('show')
}

function submitForm() {
  const form = document.getElementById('contactForm')
  const validInputs = validateAllInputs()
  const response = grecaptcha.getResponse()
  const recaptchaError = document.getElementById('recaptchaError')

  if(response.length > 0) {
    recaptchaError.classList.remove('show')

    if(validInputs) {
      const url = 'http://ingenia.com/snippets/test/contact.php'
      const name = getInputValue('nameInput')
      const surname = getInputValue('surnameInput')
      const data = new FormData(form)
      data.append('fullname', `${name} ${surname}`)
  
      window.fetch(url, {
        method: 'POST',
        body: data
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        fatalErrorMessage()
      })
    } 
  } else {
    recaptchaError.classList.add('show')
  }
}

const submitButton = document.getElementById('submitButton')
const name = document.getElementById('nameInput')
const surname = document.getElementById('surnameInput')
const email = document.getElementById('emailInput')
const phone = document.getElementById('phoneInput')
const message = document.getElementById('messageInput')

submitButton.addEventListener('click', submitForm)
name.addEventListener('change', validateName)
surname.addEventListener('change', validateSurname)
email.addEventListener('change', validateEmail)
phone.addEventListener('change', validatePhone)
message.addEventListener('change', validateMessage)
