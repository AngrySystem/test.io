async function clicker() {
    let url = 'random.h5';
    let response = fetch(url)
    .then(function(response) { 
      return response.arrayBuffer() 
    })
    .then(function(buffer) {
      var f = new hdf5.File(buffer, 'random_filename');
      // do something with f;
      let g = f.get('array_2');
      // let d = f.get('group/dataset');
      // let v = d.value;
      // let a = d.attrs;
      console.dir(g.value);
      console.log('good');
    });
}

async function clicker_() {
    let url = 'test.json';
    let local_j = await(await fetch(url)).json();
    console.log(local_j);
}