// https://github.com/mqyqingfeng/Blog/issues/13

// 第一版代码
function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  Constructor.apply(obj, arguments);

  return obj;

};



// 第二版的代码,处理返回值
function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  // ret有可能是null，所以有 || 的判断
  return typeof ret === 'object' ? ret || obj : obj;

};