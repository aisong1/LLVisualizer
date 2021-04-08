module.exports.defaultString = `// Welcome to LL Visualizer!
// To get a feel for how things work, try adding a node to the tail.

const LinkedList = () => {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = (value) => {
    let newNode = ListNode(value);

    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = () => {
    let headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };


  list.contains = (target) => {
    let helpFunc = function(node, target) {
      if (node.value === target) {
        return true;
      }

      if (node.next !== null) {
        return helpFunc(node.next, target);
      }

      return false;

    };

    return helpFunc(list.head, target);

  };

  return list;
};

const ListNode = (value) => {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

const list = LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
`;
