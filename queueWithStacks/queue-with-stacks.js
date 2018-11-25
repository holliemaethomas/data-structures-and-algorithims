'use strict';

class pseudoQue {
  constructor() {
    this.head = null;
  }

  eneques(value) {
    let node = new Node(value);
    node.next = this.prev;
    this.prev = node;
    this.length++;
    return this;
  }

  dequeue(){
    let curr = this.prev;
    while (curr.next || or curr.next.next) {
      curr = curr.next
    }
    let  
  }

}
