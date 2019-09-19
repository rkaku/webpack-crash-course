function component() {
  const elemenmt = document.createElement('div');
  const array = ['Hello,', 'Webpack!'];
  elemenmt.innerHTML = _.join(array, ' ')
  return elemenmt;
}

document.body.appendChild(component());