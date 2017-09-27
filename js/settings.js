const links = [
  'transition-duration',
  'transition-delay',
  'transition-timing-function',
  'transition-multi-property',
  'transition-shorthand',
  'animation-duration',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-timing-function',
  'animation-more-keyframes',
  'animation-performance',
  'js-simple',
  'js-end-delay',
  'js-effect-easing',
  'js-id',
];

const datas = {
  'transition-duration': {
    title: 'CSS Transitions: transition-duration',
    target: 'logo',
    type: 'css',
    code:
`
.logo {

}
.logo:hover {
  transform: scale(2);
}
`
  },

  'transition-delay': {
    title: 'CSS Transitions: transition-delay',
    target: 'logo',
    type: 'css',
    code:
`
.logo {
  transition-duration: 1s;
  transition-delay: ;
}
.logo:hover {
  transform: scale(2);
}
`
  },

  'transition-timing-function': {
    title: 'CSS Transitions: transition-timing-function',
    target: 'logo',
    type: 'css',
    code:
`
.logo {
  transition-duration: 1s;
  transition-timing-function: ;
}
.logo:hover {
  transform: scale(2);
}
`
  },

  'transition-multi-property': {
    title: 'CSS Transitions: multi property',
    target: 'logo',
    type: 'css',
    code:
`
.logo {
  transition-property: ;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
.logo:hover {
  transform: scale(2);
  opacity: 0;
}
`
  },

  'transition-shorthand': {
    title: 'CSS Transitions: shorthand',
    target: 'logo',
    type: 'css',
    code:
         `
.logo {
  transition: transform 1s ease-in, opacity 2s steps(4);
}
.logo:hover {
  transform: scale(2);
  opacity: 0;
}
`
  },

  'animation-duration': {
    title: 'CSS Animations: animation-duration',
    target: 'bus',
    type: 'css',
    code:
`
.bus {


}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-delay': {
    title: 'CSS Animations: animation-delay (also negative)',
    target: 'bus',
    type: 'css',
    code:
         `
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-delay:
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-iteration-count': {
    title: 'CSS Animations: animation-iteration-count',
    target: 'bus',
    type: 'css',
    code:
`
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count:
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-direction': {
    title: 'CSS Animations: animation-direction',
    target: 'bus',
    type: 'css',
    code:
`
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 5;
  animation-direction:
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-fill-mode': {
    title: 'CSS Animations: animation-fill-mode',
    target: 'bus',
    type: 'css',
    code:
`
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 5;
  animation-direction: alternate;
  animation-fill-mode:
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-timing-function': {
    title: 'CSS Animations: animation-timing-function',
    target: 'bus',
    type: 'css',
    code:
`
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 5;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-timing-function:
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-more-keyframes': {
    title: 'CSS Animations: more keyframes',
    target: 'bus',
    type: 'css',
    code:
         `
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 5;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  border-radius: 100px;
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  50% {


  }
  100% {
    transform: translate(100px, 0px);
  }
}
`
  },

  'animation-performance': {
    title: 'CSS Animations: performance',
    target: 'bus',
    type: 'css',
    code:
         `
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes move {
  0% {
    transform: translate(0px, 0px);
    opacity: 1;

  }
  50% {
    opacity: 0;
  }
  100% {
    transform: translate(100px, 0px);
    opacity: 1;

  }
}
`
  },

  'js-simple': {
    title: 'Web Animations: simple',
    target: 'bus',
    type: 'js',
    code:
         `
target.animate(
    { transform: ['translate(0px, 0px)',
                  'translate(100px, 0px)'] },
    1000,
);
`
  },

  'js-end-delay': {
    title: 'Web Animations: end-delay',
    target: 'bus',
    type: 'js',
    code:
`
const animation = target.animate(
    { transform: ['translate(0px, 0px)',
                  'translate(100px, 0px)'] },
    { duration: 1000,
      iterations: 2,
      direction: 'alternate',
      fill: 'forwards',
      endDelay: 0 },
);

animation.onfinish = () => {

};
`
  },

  'js-effect-easing': {
    title: 'Web Animations: effect easing',
    target: 'bus',
    type: 'js',
    code:
         `
target.animate(
    { transform: ['translate(0px, 0px)',
                  'translate(100px, 0px)'] },
    { duration: 1000,
      iterations: 2,
      direction: 'alternate',
      fill: 'forwards',
      easing: 'linear' },
);
`
  },

  'js-id': {
    title: 'Web Animations: id',
    target: 'bus',
    type: 'js',
    code:
         `
target.animate(
    { transform: ['translate(0px, 0px)',
                  'translate(100px, 0px)'] },
    { duration: 1000,
      iterations: 2,
      direction: 'alternate',
      fill: 'forwards',
      id: '' },
);
`
  },
};

const href = window.location.href;
const parameter = href.match(/[^\?]+$/)[0];

// setup links
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (parameter === link) {
    const previousA = document.querySelector('.previous');
    if (i === 0) {
      previousA.style.display = 'none';
    } else {
      const previousLink = links[i - 1];
      previousA.href = `?${previousLink}`;
      previousA.title = datas[previousLink].title;
    }

    const nextA = document.querySelector('.next');
    if (i + 1 === links.length) {
      nextA.style.display = 'none';
    } else {
      const nextLink = links[i + 1];
      nextA.href = `?${nextLink}`;
      nextA.title = datas[nextLink].title;
    }
    break;
  }
}

// setup title
const data = datas[parameter];
document.querySelector('title').textContent = data.title;
document.querySelector('.title').textContent = data.title;

// setup target element
document.querySelector('#target').setAttribute('class', data.target);

// setup code
const livecodeElement = document.querySelector('.live-code');
livecodeElement.textContent = data.code;
if (data.type === 'css') {
  livecodeElement.classList.remove('js');
  livecodeElement.classList.add('css');
} else {
  livecodeElement.classList.remove('css');
  livecodeElement.classList.add('js');
}
