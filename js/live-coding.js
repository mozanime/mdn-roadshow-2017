'use strict';

[].forEach.call(document.querySelectorAll('.live-code'), function(block) {
  block.addEventListener('input', scheduleCodeUpdate);
  // Initial application
  window.addEventListener('load', () => { updateCode(block); });
});

function scheduleCodeUpdate(evt) {
  let block = evt.target;
  // Edge adds extra divs when editing. It's weird.
  while (block && !block.classList.contains('live-code')) {
    block = block.parentNode;
  }
  if (!block) {
    console.log('Couldn\'t get root of block');
    return;
  }
  if (block.updateTimeout) {
    clearTimeout(block.updateTimeout);
  }

  const styleBlock = document.querySelector('.target-content style');
  if (styleBlock) {
    styleBlock.remove();
  }

  block.updateTimeout = setTimeout(() => { updateCode(block) }, 500);
}

function updateCode(block) {
  block.updateTimeout = null;

  const selection = window.getSelection();
  const caretRect = selection.getRangeAt(0).getBoundingClientRect();

  document.querySelector('#target').getAnimations().forEach(animation => {
    animation.cancel();
  });

  if (block.classList.contains('css')) {
    updateCSS(block);
  } else {
    updateJS(block);
  }

  hljs.highlightBlock(block);

  const caretPosition =
    document.caretPositionFromPoint(caretRect.x, caretRect.y);
  const range = document.createRange();
  range.setStart(caretPosition.offsetNode, caretPosition.offset);
  range.setEnd(caretPosition.offsetNode, caretPosition.offset);
  selection.removeAllRanges();
  selection.addRange(range);
}

function updateCSS(block) {
  // Get target content
  let ancestor = block;
  let target = null;
  while (ancestor && !target) {
    target = ancestor.querySelector('.target-content');
    ancestor = ancestor.parentNode;
  }
  if (!target) {
    console.log('Target content to update not found');
  }
  // Create style element
  let styleBlock = document.createElement('style');
  target.appendChild(styleBlock);

  // Update result
  styleBlock.textContent = block.textContent;
}

function updateJS(block) {
  const errorBlock = document.querySelector('.js-error');
  try {
    eval(block.textContent);
    errorBlock.textContent = '';
    errorBlock.classList.remove('active');
  } catch(e) {
    console.log(e);
    errorBlock.textContent = `Error: ${e.message}`;
    errorBlock.classList.add('active');
  }
}
