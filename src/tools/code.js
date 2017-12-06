export default {
  js: str => str.trim().replace(/\s{5}/g, '\n'),
  bash: str => str.trim().replace(/\s{5}/g, '\n'),
  html: (str) => {
    let result = str;
    // 处理属性
    const afterAttr = str.trim().replace(/\s([@?a-zA-Z-]*)=/g, ($1, $2, $3) => {
      console.log($1, $2, $3, 'aaa');
      return ` <span class="code-attr">${$2}</span>`;
    });
    // 处理标签
    const afterTag = afterAttr.replace(/(&lt;\/?)([a-zA-Z-]*)\s?/g, ($1, $2, $3) => `${$2}<span class="code-tag">${$3}</span>${$1.indexOf('/') > -1 ? '' : ' '}`);
    result = afterAttr;
    result = afterTag;
    return result;
  },
};
