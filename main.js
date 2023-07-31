const subForm = document.getElementById('sub-form')

subForm.addEventListener('submit', e => {
  e.preventDefault()
  const userInput = e.target.email.value.trim()

  console.log(userInput)

  if (userInput && userInput.length > 0 && isValid(userInput)) {
    subForm.classList.remove('error')
  } else subForm.classList.add('error')
})

function isValid(email) {
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)
}
