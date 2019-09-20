import _ from 'lodash';
import './style.css';
import python from './python.png';

function component() {
  const elemenmt = document.createElement('div');
  const array = ['Hello,', 'Webpack', '!!'];
  elemenmt.innerHTML = _.join(array, ' ')
  return elemenmt;
}

document.body.appendChild(component());
document.body.classList.add('haikei');

const image = new Image();
image.src = python;
document.body.appendChild(image);