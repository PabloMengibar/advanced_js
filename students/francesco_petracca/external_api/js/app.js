document.querySelector('.get-jokes').addEventListener('click', getJokes)

async function getJokes(e) {
  e.preventDefault();
  let output = '';
  const number = document.querySelector('input[type="number"]').value;
  const url = `http://api.icndb.com/jokes/random/${number}`;
  try{
  let response = await fetch(url);
  let data = await response.json();

  let isSuccess = data.type === "success";
  let jokes = data.value;
  
  
  if(isSuccess) {
      jokes.forEach(function(joke){
        output += `<li>${joke.joke}</li>`
      })
    } else {
      output += '<li>Something went wrong</li>'
   }
  } catch(e){
    output += '<li>Something went wrong</li>'
  }
  document.querySelector('.jokes').innerHTML = output
}

