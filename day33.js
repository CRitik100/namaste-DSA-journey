/**
 * Linked List ::=>>
 */

// How to create a Node.
function Node(value) {
  this.val = value;
  this.next = null;
}

// How to create a Linked list.
function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.get = function (index) {
  let curr = this.head;
  let i = 0;
  if (index < 0 || index >= this.size) {
    return -1;
  } else {
    while (i < index) {
      curr = curr.next;
      i++;
    }
    return curr.val;
  }
};

LinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.size++;
};

LinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  let currentNode = this.head;
  if (currentNode == null) {
    this.head = node;
  } else {
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  this.size++;
};

LinkedList.prototype.addAtIndex = function (index, val) {
  let node = new Node(val);
  let curr = this.head;
  let i = 0;
  if (index == 0) {
    this.addAtHead(val);
  } else if (index == this.size) {
    this.addAtTail(val);
  } else if (index > this.size || index < 0) {
    return;
  } else {
    while (i < index - 1) {
      curr = curr.next;
      i++;
    }
    node.next = curr.next;
    curr.next = node;
    this.size++;
  }
};

LinkedList.prototype.deleteAtIndex = function (index) {
  let curr = this.head;
  if (index < 0 || index > this.size - 1) {
    return;
  } else if (index == 0) {
    this.head = curr.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (index == this.size - 1) {
      curr.next = null;
    } else {
      curr.next = curr.next.next;
    }
  }
  this.size--;
};

let myList = new LinkedList();
let vNode = new Node("Vickey"); // Vickey
myList.head = vNode;
myList.size++;
myList.addAtHead("Ritik"); // Ritik -> Vickey
myList.addAtTail("Bhavin"); // Ritik -> Vickey -> Bhavin
myList.addAtIndex(1, "Sriram"); // Ritik -> Sriram -> Vickey -> Bhavin
myList.deleteAtIndex(0); // Ritik is deleted -> Sriram -> Vickey -> Bhavin
console.log(myList.get(0)); // Should return "Sriram"
