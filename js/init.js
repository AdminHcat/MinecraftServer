/* 
 * Copyright (C) 2016 andylizi
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function loadJS(a,b,c){var d=document.createElement("script");d.type="text/javascript",d.src=a,b&&(d.onload=b,d.onreadystatechange=b),c&&(d.onerror=c),document.getElementById("dynamicJSContainer").appendChild(d)}function loadImage(a,b){var c=new Image;return c.src=a,c.complete?(b.call(c),void 0):(c.onload=function(){c.onload=null,b.call(c)},void 0)}function importJQuery(a,b){loadJS("js/jquery-1.9.1.min.js",a,function(){loadJS("http://libs.baidu.com/jquery/1.9.1/jquery.min.js",a,function(){loadJS("http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js",a,b)})})}var oHead,oContainer;document.getElementById("dynamicJSContainer")||(oHead=document.getElementsByTagName("head").item(0),oContainer=document.createElement("div"),oContainer.id="dynamicJSContainer",oHead.appendChild(oContainer)),String.prototype.startWith=function(a){return null==a||""==a||0==this.length||a.length>this.length?!1:this.substr(0,a.length)==a?!0:!1},String.prototype.endWith=function(a){return null==a||""==a||0==this.length||a.length>this.length?!1:this.substring(this.length-a.length)==a?!0:!1},Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d,e,f,g;if(null==this)throw new TypeError(" this is null or not defined");if(e=Object(this),f=e.length>>>0,"[object Function]"!={}.toString.call(a))throw new TypeError(a+" is not a function");for(b&&(c=b),d=0;f>d;)d in e&&(g=e[d],a.call(c,g,d,e)),d++}),importJQuery(function(){window.onload=function(){loadImage("images/mc_button.png",function(){loadImage("images/mc_button_hover.png",function(){loadingAnim.stop(),$("#loading").remove(),$("#bg").fadeIn(800,"swing"),setTimeout(function(){$("#logo").fadeIn(1e3,"swing"),setTimeout(function(){$("#TASLogo").fadeIn("fast"),$("#buttons").fadeIn(),$(".go-next").fadeIn("slow")},100)},300),$("#main").css("display","block"),splashAnim($("#splash"),10),switchButtonAnim()})})}});