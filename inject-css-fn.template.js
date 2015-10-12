(function(css){
  if(typeof document === 'undefined') {
    //not in the browser
    return css;
  }
  var d = document;

  //keep track of css code that's allready been inserted
  var key = "CSS_TO_CSSJS"; 
  d[key] = d[key] || {};
  if (d[key][css]){
    return;
  }
  d[key][css] = true;

  //inject a style tag with the css
  var elem = d.createElement('style');
  elem.setAttribute('type', 'text/css');

  if ('textContent' in elem) {
    elem.textContent = css;
  } else {
    elem.styleSheet.cssText = css;
  }

  d.getElementsByTagName('head')[0].appendChild(elem);

  return css;
}("INPUT_CSS_HERE"));
