function showAlert() {
  alert('Button telah diklik.')
}

const button = document.getElementById('btn-event')
button.addEventListener('click', (a) => {
  showAlert()
  console.log(a);
});