'use strict';

module.exports = require('../tree.js');

levelOrder(tree){
  let results = [];
  let nodeQueue = [];
  nodeQueue.push(this.root);
  while(nodeQueue.length) {
    let curr = nodeQueue.shift();
    results.push(curr.value);
    if(curr.left){
      nodeQueue.push(curr.left);
    }
    if(curr.right){
      nodeQueue.push(curr.right);
    }
    return results; 
  }
}
