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
      const searchTree = function (node) {
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
    }
    return searchTree(Node);
  }
}
