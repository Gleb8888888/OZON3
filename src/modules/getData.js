const getData = (str) => {
  //console.log(str);
  return fetch(
    `https://test-b7d0a-default-rtdb.firebaseio.com/goods.json` //для поиска ?${str ? `search=${str}` : ''}
  ).then((response) => {
    return response.json();
  });
};
export default getData;
