/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start


class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}




/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // 双向链表结构，来达到移除节点O(1)复杂度的要求
  // 利用hash表，来达到get方法O(1)复杂度的要求

  this.capacity = capacity
  // 用来存储key =》 value，O(1) get
  this.hashmap = {}

  // 虚拟头尾节点
  this.dummyHead = new Node(null,null)
  this.dummyTail = new Node(null, null)
  this.dummyHead.next = this.dummyTail
  this.dummyTail.prev = this.dummyHead
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // 哈希表中找不到对应的值，则返回 -1。被读取的节点，要刷新它的位置，移动到链表头部
  const node = this.hashmap[key]
  if (!node) {
    return -1
  }
  this._moveToHead(node)
  return node.value
};


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 写入新数据，先检查容量，决定是否删“老家伙”，然后创建新的节点，添加到链表头部(最不优先被淘汰)，映射到哈希表。
  // 写入已有的数据，则更新数据值，刷新节点的位置。

  let node = this.hashmap[key]            // 获取链表中的node
  if (!node) {                  // 不存在于链表，是新数据
    if (Object.keys(this.hashmap).length >= this.capacity) { // 容量已满
      this._removeLRUItem()             // 删除最远一次使用的数据
    }
    const newNode = new Node(key, value) // 创建新的节点
    this.hashmap[key] = newNode          // 存入哈希表
    this._addToHead(newNode)           // 将节点添加到链表头部
  } else {                   // 已经存在于链表，老数据
    node.value = value       // 更新value
    this._moveToHead(node)    // 将节点移到链表头部
  }
};


LRUCache.prototype._moveToHead = function(node) {
  this._deleteNode(node)
  this._addToHead(node)
}

LRUCache.prototype._addToHead = function(node) {
  node.prev = this.dummyHead      // node的prev指针，指向虚拟头结点
  node.next = this.dummyHead.next // node的next指针，指向原来的真实头结点
  this.dummyHead.next.prev = node // 原来的真实头结点的prev，指向node
  this.dummyHead.next = node      // 虚拟头结点的next，指向node
}

LRUCache.prototype._deleteNode = function(node) {
  let temp1 = node.prev     // 暂存它的后继节点
  let temp2 = node.next     // 暂存它的前驱节点
  temp1.next = temp2        // 前驱节点的next指向后继节点
  temp2.prev = temp1        // 后继节点的prev指向前驱节点
}


// 删除最旧的数据
LRUCache.prototype._removeLRUItem = function(){
  // const temp = this.dummyTail.prev.prev
  // this.dummyTail.prev = temp
  // temp.next = this.dummyTail
  const tail = this.dummyTail.prev
  this._deleteNode(tail)
  delete this.hashmap[tail.key]
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

