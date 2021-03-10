const dataUser = [
  'femilia',
  'putri',
  'mayranti'
]

for (let index = 0; index < dataUser.length; index++) {
  const element = dataUser[index];
  console.log('element', element);
  document.getElementById('user').innerHTML = element
}

dataUser.map(function (data, index) {
  console.log(data);
  document.getElementById('user').innerHTML = data
})