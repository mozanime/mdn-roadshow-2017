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
  if (block.highlightTimeout) {
    clearTimeout(block.highlightTimeout);
  }
  block.updateTimeout = setTimeout(() => { updateCode(block) }, 500);
  block.highlightTimeout = setTimeout(() => {
    block.highlightTimeout = null;
    hljs.highlightBlock(block);
  }, 3000);
}

function updateCode(block) {
  block.updateTimeout = null;
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
  let styleBlock = target.querySelector('style');
  if (!styleBlock) {
    styleBlock = document.createElement('style');
    target.appendChild(styleBlock);
  }
  // Update result
  styleBlock.textContent = block.textContent;
}