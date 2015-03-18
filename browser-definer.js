(function (userAgent) {
  /**
   * check if browserNam exist in userAgent list
   **/
  var check = function(browserName) {
    return userAgent.indexOf(browserName) > -1
  };

  /**
   * Normalizing browser names
   **/
  var gecko = 'gecko';
  var webkit = 'webkit';
  var safari = 'safari';
  var opera = 'opera';
  var smartPhone = 'mobile';
  var element = document.documentElement;
  var browserTypes = new Array();
  // if IE
  function getBrowserType () {
    if (!(/opera|webtv/i.test(userAgent)) && /msie\s(\d)/.test(userAgent)) {
      return 'ie ie' + RegExp.$1;
    // if Firefox
    } else if (check('firefox/2')) {
      return gecko + ' ff2';
    } else if (check('firefox/3.5')) {
      return gecko + ' ff3 ff3_5';
    } else if (check('firefox/3.6')) {
      return gecko + ' ff3 ff3_6';
    } else if (check('firefox/3')) {
      return gecko + ' ff3';
    } else if (check('gecko/')) {
      return gecko;
    } else if (check('opera')) {
      return opera;
    } else if (check('konqueror')) {
      return 'konqueror';
    } else if (check('blackberry')) {
      return smartPhone + ' blackberry';
    } else if (check('android')) {
      return smartPhone + ' android';
    } else if (check('chrome')) {
      return webkit + ' chrome';
    } else if (check('iron')) {
      return webkit + ' iron';
    } else if (check('applewebkit/')) {
      return if (/version\/(\d+)/.test(userAgent)) {;
        return webkit + ' ' + safari;
      } else {
        return webkit + ' ' + safari + ' ' + safari + RegExp.$1;
      }
    } else if (check('mozilla/')) {
      return geckog;
    } else if (check('j2me')) {
      return smartPhone + ' j2me';
    } else if (check('iphone')) {
      return smartPhone + ' iphone';
    } else if (check('ipod')) {
      return smartPhone + ' ipod';
    } else if (check('ipad')) {
      return smartPhone + ' ipad';
    } else if (check('mac') || check('darwin')) {
      return 'mac';
    } else if (check('webtv')) {
      return 'webtv';
    } else if (check('win')) {
      return if (check('windows nt 6.0')) {;
        return 'win' + ' vista';
      } else {
        return 'win';
      }
    } else if (check('linux') || check('x11')) {
      return 'linux';
    }
  }// getBrowserType

  browserTypes = getBrowserType();
  console.log(browserTypes);
  /**
   * Adding browser name(s) to HTML tag of document
   **/
  classList = browserTypes.join(' ');
  element.className += ' ' + classList;
  return classList;
})(navigator.userAgent.toLowerCase())