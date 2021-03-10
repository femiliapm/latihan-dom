// fetch('https://jsonplaceholder.typicode.com/users')
fetch('../user.json')
  .then(response => response.json())
  .then(json => {
    console.log("json", json)
    console.log(json[0].name);
    user(json)
  })
  // handling error
  .catch(err => console.log(err))

function user(dataUser) {
  console.log('dataUser', dataUser);
  for (let index = 0; index < dataUser.length; index++) {
    const elements = dataUser[index];
    console.log("elements", elements);
    const p = document.createElement('p');
    p.textContent = elements.name
    p.style.marginLeft = '12px'
    document.body.append(p);
  }

  let output = '';

  dataUser.forEach(element => {
    output += `
      <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
      </tr>
    `;
  });

  const bodyTable = document.getElementById('body-table')
  console.log('body table:', bodyTable);
  bodyTable.innerHTML = output
  console.log('print element', dataUser);
}