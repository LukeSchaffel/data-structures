//doubly linked lists

class LinkedList {
  constructor(){
    this.head = this.tail = null
  }

  append(value){
    //if the list is empty
    if (!this.tail) {
      this.head = this.tail = newNode(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.previous = oldTail
    }

  }

  prepend(value){
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value)
    } else {
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead 
    }
  }

  deleteHead(){
    //if list is empty
    if (!this.head) {
      return null
    } else {
      let removedHead = this.head
      //if 1 node left
      if (this.head === this.tail){
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
      return removedHead.value
    }
  }

  deleteTail(){
    //empty list
    if (!this.tail) {
      return null
    } else {
      let removedTail = this.tail
      //if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
      }
      return removedTail.value
      
    }

  }

  search(){

  }
}

class Node {
  constructor(value, prev, next){
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }

}
