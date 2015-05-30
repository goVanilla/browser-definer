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
  var opera = 'opera';
  var gecko = 'gecko';
  var safari = 'safari';
  var webkit = 'webkit';
  var smartPhone = 'mobile';
  var element = document.documentElement;
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
      if (/version\/(\d+)/.test(userAgent)) {
        return webkit + ' ' + safari;
      } else {
        return webkit + ' ' + safari + ' ' + safari + RegExp.$1;
      }
    } else if (check('mozilla/')) {
      return geckog;
    } else if (check('j2me')) {
      return smartPhone + ' j2me';
    }
  }// getBrowserType
  function osType () {
    if (check('iphone')) {
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
      if (check('windows nt 6.0')) {
        return 'win' + ' vista';
      } else {
        return 'win';
      }
    } else if (check('linux') || check('x11')) {
      return 'linux';
    }
  }// osType
  /**
   * Adding browser name(s) to HTML tag of document
   **/
  var classList = element.className + ' ' + getBrowserType() + ' ' + osType();
  element.className = (element.className == '') ? classList.trim() : classList;
})(navigator.userAgent.toLowerCase())