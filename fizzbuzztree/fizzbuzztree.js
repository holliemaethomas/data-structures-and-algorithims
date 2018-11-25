levelOrder(tree){
  let results = [];
  let nodeQue = [];
  nodeQue.push(this.root)
  while(nodeQue.length){
    let curr = nodeQue.shift();
    results.push(curr.value)
    if(curr.left){
      nodeQue.push(curr.left)
    }
    if(curr.right){
      nodeQue.push(curr.right)
    }
  }
  return results;
}
