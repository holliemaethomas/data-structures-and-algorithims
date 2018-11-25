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
