let tree = new FizzBuzzTree();
fizzBuzzTree(){
  let.walk = node => {
    if(node.left){
      walk(node.left)
    }
    if(node.right){
      walk(node.right);
    }
    if(node.value %3 === 0 && node.value %5 === 0){
      node.value = "FizzBuzz";
    }
    else if(node.value %3 === 0){
      node.value = "fizz";
    }
    else if (node.value % 5 === 0){
      node.value = "buzz";
    }
    return tree;
  }
}
