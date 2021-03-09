const bgColor = document.getElementById('bg-color')
const textColor = document.getElementById('text-color')

bgColor.addEventListener('change', (event) => {
  console.log(event);
  document.body.style.backgroundColor = event.target.value;
});

textColor.addEventListener('change', (event) => {
  document.body.style.color = event.target.value
})