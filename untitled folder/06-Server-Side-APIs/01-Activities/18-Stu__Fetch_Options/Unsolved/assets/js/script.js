fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5'), {
  // the browser fetches the resource from the remote server withour first looking in the cache
  // the browser will then update the caache with the download resources
  cache: 'reload',
})

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
