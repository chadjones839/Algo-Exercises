/* 
SINGLY LINKED LIST

.traverse()
 Example code to show how to traverse through a linked list

.push(val)
 Add a new tail node to the list

.pop()
 Remove the tail node from the list

.shift()
 Remove the head node from the list

.unshift(val)
 Add a new head node to the list

.get(index)
 Get a node by its position in the list

.set()

.insert()

.remove()

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  traverse() {
    var current = this.head;
    while(current) {
      current = current.next;
    }
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // sets current tail's next node value to the newNode value
      this.tail.next = newNode;
      // then sets the new tail as the newNode value
      this.tail = newNode;
    }
    this.length++;
    // returns whole list
    return this
  }
  pop() {
    // if no nodes, return undefined
    if (!this.head) return undefined;
    // Loop through until you reach the tail
    var current = this.head;
    var newTail = current;
    while(current.next) {
        newTail = current
        current = current.next;
    }
    // Set the next property of the 2nd to last node to be null
    newTail.next = null;
    // Set the tail to the 2nd to last node
    this.tail = newTail;
    // Decrement length
    this.length--;
    // Check if the newTail is the last node in the list, and set it the head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the removed node
    return current.val;
  }
  shift() {
    // If no nodes, return undefined
    if (!this.head) return undefined;
    // Store the curent head in a variable
    let currentHead = this.head;
    // Set the head to the the current head's next node
    this.head = currentHead.next;
    // Decrement length
    this.length--;
    // Return value of removed code
    return currentHead.val
  }
  unshift(val) {
    // Create a new node
    const newHead = new Node(val)
    // If there is no head, set the tail and head
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    }
    else {
      // set new node's next property to the current head
      newHead.next = this.head;
      // set the head to the new node
      this.head = newHead
    }
    this.length++
    return this;
  }
  get(idx) {
    // if the index is less than 0 or grater than or equal to the length of the list, return null
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let currentNode = this.head;
    // loop throuigh list until index is reached
    for (let i= 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    // return node a that index
    return currentNode;
  }
  set() {

  }
}

var list = new SinglyLinkedList();
list.push(10)
list.push(11)
list.push(12)
list.push(13)
console.log(list.get(0))