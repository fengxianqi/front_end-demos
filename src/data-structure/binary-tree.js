class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
// 二叉树
class BinaryTree {
  // 根节点
  constructor (root) {
    this.root = root || null
  }
  // 插入一个节点
  insert (key) {
    let newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  // 在根节点下插入子节点
  insertNode (node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  _inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this._inOrderTraverseNode(node.right, callback)
    }
  }
  // 中序遍历
  inOrderTraverse (callback) {
    this._inOrderTraverseNode(this.root, callback)
  }

  _preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this._preOrderTraverseNode(node.left, callback)
      this._preOrderTraverseNode(node.right, callback)
    }
  }
  // 前序遍历
  preOrderTraverse (callback) {
    this._preOrderTraverseNode(this.root, callback)
  }

  _postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback)
      this._postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 后序遍历
  postOrderTraverse (callback) {
    this._postOrderTraverseNode(this.root, callback)
  }

  // 最小值
  min () {
    return this._minNode(this.root)
  }
  _minNode (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  // 最大值
  max () {
    return this._maxNode(this.root)
  }
  _maxNode (node) {
    if (node) {
      while(node && node.right) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  // 查找
  search (key) {
    return this._searchNode(this.root, key)
  }
  _searchNode (node, key) {
    if (node === null) {
      return false
    }	
    if (key < node.key) {
      return this._searchNode(node.left, key)
    } else if (key > node.key) {
      return this._searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 删除节点
  remove (key) {
    this._removeNode(this.root, key)
  }

  findMinNode (node) {
    if (node) {
      while(node && node.left) {
        node = node.left
      }
      return node
    }
    return null
  }

  _removeNode (node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = this._removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key)
      return node
    } else {
      // 叶子节点情况直接删除
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 有左或右子树的情况，直接将子树替换为删除的节点
      if (node.left === null) {
        node = node.right
        return node
      } else  if (node.right === null) {
        node = node.left
        return node
      }

      // 同时有两个子树的情况,将右子树最小的节点替换到被删除的节点
      let aux = this.findMinNode(node.right)
      node.key = aux.key
      node.right = this._removeNode(node.right, aux.key)
      return node
    }
  }
}

export default BinaryTree
