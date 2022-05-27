// //doubly linked lists

// class LinkedList {
//   constructor(){
//     this.head = this.tail = null
//   }

//   append(value){
//     //if the list is empty
//     if (!this.tail) {
//       this.head = this.tail = new Node(value)
//     } else {
//       let oldTail = this.tail
//       this.tail = new Node(value)
//       oldTail.next = this.tail
//       this.tail.prev = oldTail
//     }

//   }

//   prepend(value){
//     // if list is empty
//     if (!this.head) {
//       this.head = this.tail = new Node(value)
//     } else {
//       let oldHead = this.head
//       this.head = new Node(value)
//       oldHead.prev = this.head
//       this.head.next = oldHead 
//     }
//   }

//   deleteHead(){
//     //if list is empty
//     if (!this.head) {
//       return null
//     } else {
//       let removedHead = this.head
//       //if 1 node left
//       if (this.head === this.tail){
//         this.head = this.tail = null
//       } else {
//         this.head = this.head.next
//         this.head.prev = null
//       }
//       return removedHead.value
//     }
//   }

//   deleteTail(){
//     //empty list
//     if (!this.tail) {
//       return null
//     } else {
//       let removedTail = this.tail
//       //if 1 node left
//       if (this.head === this.tail) {
//         this.head = this.tail = null
//       } else {
//         this.tail = this.tail.prev
//         this.tail.next = null
//       }
//       return removedTail.value
//     }
//   }

//   search(value){
//     let currentNode = this.head
    
//     while (currentNode){
//       if (currentNode.value === value) {
//         return currentNode
//       }
//       currentNode = currentNode.next
//     }
//     return null
//   }
// }

// class Node {
//   constructor(value, prev, next){
//     this.value = value
//     this.prev = prev || null
//     this.next = next || null
//   }
// }

// let list = new LinkedList()

// list.append("joey")
// list.append("Jeff")
// list.prepend("Slubyu")


// console.log(list);

class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value){
    this.root = new Node(value)
    this.count = 0
  }

  size(){
    return this.count
  }

  insert(value){
    this.count++

    let newNode = new Node(value)

    const searchTree = node => {
      //if value is < node.value go left,
      if (value < node.value){
        // if no left child append new node
        if (!node.left) {
          node.left = newNode
        }
        //call search tree gain if there is a left child
        else {
          searchTree(node.left)
        }
      }
      // if value > node.value go right
      else if (value > node.value){
        if (!node.right) {
          node.right = newNode
        }
        else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  min(){

  }

  max(){

  }

  contains(){

  }

  //depth first search
  dfsInOrder(){

  }

  dfsPreOrder(){

  }

  dfsPostOrder(){

  }

  

}

