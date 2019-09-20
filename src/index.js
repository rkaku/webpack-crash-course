import _ from 'lodash';
import './style.css';

function component() {
  const elemenmt = document.createElement('div');
  const array = ['Hello,', 'Webpack', '!!'];
  elemenmt.innerHTML = _.join(array, ' ')
  return elemenmt;
}

document.body.appendChild(component());
document.body.classList.add('haikei');