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

merge(val1, val2){
  let C = val1.head;
  let A = new Node(val1);
  let B = new Node(val2);
  if(A && B){
    C.head = A.head;
    C.next = B.head;
  }
while(A.next){
  C.next = A.next;
  A.head = A.next;
}
if(B.next){
  C.next = B.next;
  B.head = B.next;
}
return C;
}
