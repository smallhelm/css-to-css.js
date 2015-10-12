module.exports = function(css){
  return '(function(e){if("undefined"==typeof document)return e;var t=document,n="CSS_TO_CSSJS";if(t[n]=t[n]||{},!t[n][e]){t[n][e]=!0;var r=t.createElement("style");return r.setAttribute("type","text/css"),"textContent"in r?r.textContent=e:r.styleSheet.cssText=e,t.getElementsByTagName("head")[0].appendChild(r),e}})('+JSON.stringify(css)+');';
};