const links = [
  "transition-duration",
  "transition-delay",
  "transition-timing-function",
  "transition-multi-property",
  "animation-duration",
  "animation-iteration-count",
  "animation-direction",
  "animation-fill-mode",
  "animation-timing-function",
];

const datas = {
  "transition-duration": {
    title: "CSS Transitions: transition-duration",
    target: "logo",
    code:
`
.logo {

}
.logo:hover {
  transform: scale(2);
}
`
  },

  "transition-delay": {
    title: "CSS Transitions: transition-delay",
    target: "logo",
    code:
`
.logo {
  transition-property: transform;
  transition-duration: 1s;
  transition-delay: ;
}
.logo:hover {
  transform: scale(2);
}
`
  },

  "transition-timing-function": {
    title: "CSS Transitions: transition-timing-function",
    target: "logo",
    code:
`
.logo {
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ;
}
.logo:hover {
  transform: scale(2);
}
`
  },

  "transition-multi-property": {
    title: "CSS Transitions: multi property",
    target: "logo",
    code:
`
.logo {
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
.logo:hover {
  transform: scale(2);
  opacity: 0;
}
`
  },

  "animation-duration": {
    title: "CSS Animations: animation-duration",
    target: "bus",
    code:
         `
.bus {

}
@keyframes move {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(100px, 0px);
  }
}
`
  },

  "animation-iteration-count": {
    title: "CSS Animations: animation-iteration-count",
    target: "bus",
    code:
`
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count:
}
@keyframes move {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(100px, 0px);
  }
}
`
  },

  "animation-direction": {
    title: "CSS Animations: animation-direction",
    target: "bus",
    code:
         `
.bus {
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: 5;
  animation-direction:
}
@keyframes move {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(100px, 0px);
  }
}
`
  },

  "animation-fill-mode": {
    title: "CSS Animations: animation-fill-mode",
    target: "bus",
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
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(100px, 0px);
  }
}
`
  },

  "animation-timing-function": {
    title: "CSS Animations: animation-timing-function",
    target: "bus",
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
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(100px, 0px);
  }
}
`
  },
};

const href = window.location.href;
const parameter = href.match(/[^\?]+$/)[0];

// setup links
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (parameter === link) {
    const previousA = document.querySelector(".previous");
    if (i === 0) {
      previousA.style.display = "none";
    } else {
      const previousLink = links[i - 1];
      previousA.href = `?${previousLink}`;
      previousA.title = datas[previousLink].title;
    }

    const nextA = document.querySelector(".next");
    if (i + 1 === links.length) {
      nextA.style.display = "none";
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
document.querySelector("title").textContent = data.title;
document.querySelector(".title").textContent = data.title;

// setup target element
document.querySelector("#target").setAttribute("class", data.target);

// setup code
document.querySelector(".live-code").textContent = data.code;
