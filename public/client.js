const button = document.getElementById('myButton');
button.addEventListener('click', function(e) 
{
let buname='CT';
fetch(('/value/'+ buname), {method: 'GET'}).then(function(response) 
  {
    if (response.ok) 
    {
      return response;
    }
    throw Error(response.statusText);
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log('Request succeeded :', json);
  }).catch(function(error) {
    console.log('Request failed:', error.message);
  });

});