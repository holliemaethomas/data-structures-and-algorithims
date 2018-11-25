insert_before(searchValue, newValue){
  let curr = this.head;
  while(curr.next){
    if(curr.next.value === searchValue){
      let newNode = new Node(newValue);
      newNode.next = curr.next;
      curr.next = newNode;
      return this;
    }
  }
}

insert_after(searchValue, newValue){
  let curr = this.head;
  while(curr.next){
    if(curr.value === searchValue){
      let newNode = new Node(newValue);
      newNode.next = curr.next;
      curr.next = newNode;
      return this;
    }
  }
}

kth_from_end(k){
  let curr = this.head;
  for (let i = 0; i<this.length -(k-1);i++){
    curr = curr.next;
  }
  return curr; 
}
