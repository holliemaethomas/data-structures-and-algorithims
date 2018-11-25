'use strict';

let tree = new BinaryTree();
findMaxValue(tree){
  let maxValue = 0;
  let walk = node => {
    if(node.left){
      walk(node.left);
    }
    if(node.right){
      walk(node.right);
    }
    if(node.value > maxValue){
      maxValue = node.value;
    }
  }
  return maxValue
}
