/*!
 * jquery.typer.js 0.0.1 - https://github.com/yckart/jquery.typer.js
 * The typewriter effect
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/$.fn.typer=function(text,options){options=$.extend({},{char:"",delay:2e3,duration:400,endless:!0,onType:$.noop,afterWord:$.noop},options||text),text=$.isPlainObject(text)?options.text:text;var elem=$(this),isTag=!1,c=0;(function typetext(i){var e=({string:1,number:1}[typeof text]?text:text[i])+"",char=e.substr(c++,1);if(options.onType(),char==="<"&&(isTag=!0),char===">"&&(isTag=!1),elem.html(e.substr(0,c)+(options.char||" ")),c<=e.length)isTag?typetext(i):setTimeout(typetext,options.duration/10,i);else{if(c=0,i++,i===text.length&&!options.endless)return;i===text.length&&(i=0),options.afterWord(),setTimeout(typetext,options.delay,i)}})(0)};
//# sourceMappingURL=/cdn/shop/t/4/assets/jquery.typer.js.map?v=172645669122225227121665667127