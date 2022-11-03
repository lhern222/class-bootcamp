fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
// first 10 urls, state open, sort by date created, direction discription 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per page parameter will limit the results base per page 
//the state parameter represents the current state of the isSecureContext. it can be open, closed or all 
//sort will order the reults based on the parameter given the data created, and 
