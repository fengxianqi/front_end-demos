/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

  // 该题应该用状态机来做，待二刷
  // https://leetcode-cn.com/problems/string-to-integer-atoi/solution/javascriptzi-dong-ji-guan-fang-ti-jie-de-xiang-xi-/

  let pre="",num="",idx=0
  while(s[idx]===" "){
      idx++;
  }

  while(s[idx]==="+"||s[idx]==="-"){
      if(pre){
          return 0;
      }
      pre=s[idx++];
  }

  while(/\d/.test(s[idx])){
      num+=s[idx++];
  }

  let res=Number(pre+num)||0;
  res=Math.max((-2)**31,res);
  res=Math.min(2**31-1,res);
  return res

};
// @lc code=end

