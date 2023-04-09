fetch("./data.json")
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data.features)
  })
  .catch((err) => console.log(err));

console.log(features);
