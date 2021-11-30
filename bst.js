class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(Data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(Data, node);
      return;
    } else {
      const searchTree = function (Node) {
        if (Data < Node.Data) {
          if (Node.left === null) {
            Node.left = new Node(Data, node);
            return;
          } else if (Node.left !== null) {
            return searchTree(Node.left);
          }
        } else if (Data > Node.Data) {
          if (Node.right === null) {
            Node.right = new Node(Data, node);
            return;
          } else if (Node.right !== null) {
            return searchTree(Node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(Node);
    }
  }

  FindMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.Data !== data) {
      if (data < current.Data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(Data) {
    let current = this.root;
    while (current) {
      if (Data == current.Data) {
        return true;
      }
      if (Data < current.Data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(Data) {
    const removeNode = function (Node, Data) {
      if (Node == null) {
        return null;
      }
      if (Data == Node.Data) {
        if (Node.left == null && Node.right == null) {
          return null;
        }
        if (Node.left == null) {
          return Node.right;
        }
        if (Node.right == null) {
          return Node.left;
        }
        var Tempnode = Node.right;
        while (Tempnode.left !== null) {
          Tempnode = Tempnode.left;
        }
        Node.Data = Tempnode.Data;
        Node.right = removeNode(Node.right, Tempnode.Data);
        return Node;
      } else if (Data < Node.Data) {
        Node.left = removeNode(Node.left, Data);
        return Node;
      } else {
        Node.right = removeNode(Node.right, Data);
        return Node;
      }
    };
    this.root = removeNode(this.root, Data);
  }
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(10);
console.log(bst.FindMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(5));
