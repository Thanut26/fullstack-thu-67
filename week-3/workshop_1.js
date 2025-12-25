const furniture = ['Table', 'Chairs', 'Couch'];

furniture.forEach(item => {

  [...item].forEach(char => {
    console.log(char);
  });
});