import _ from 'lodash';
import Tiger from './utilities';

console.log(Tiger.say());

function component() {
  const elemenmt = document.createElement('div');
  const array = ['Hello,', 'Webpack', '!!'];
  elemenmt.innerHTML = _.join(array, ' ')
  return elemenmt;
}

document.body.appendChild(component());