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
function next(){var a,b,c;return $("#bg").slideUp("slow"),a=$("#TASLogo"),b=$("#frameLoading"),c=$("#mcbbsFrame"),$("#introduction").slideDown("slow","swing"),$("body").css("overflow-y","hidden"),loadingAnim=playLoadingAnim(b[0]),b.append("<br/>Loading..."),c[0].onload=function(){a.fadeOut("fast","swing",function(){a.css("right","auto"),a.css("bottom","1%"),a.css("left","1%"),a.css("clip","rect(auto 187px auto auto)")}),a.click(function(){a.animate({left:"-20%"},"slow","linear",function(){a.fadeOut()})}),b.fadeOut("normal","swing",function(){loadingAnim.stop(),c.fadeIn("normal","swing",function(){a.fadeIn("slow")})})},c.attr("src","http://www.mcbbs.net/thread-448326-1-1.html"),!1}function pervious(){$("#changelogView").fadeOut("fast"),$("#changelog").fadeOut("slow"),$("body").css("overflow-y","hidden"),$("#bg").slideDown("slow","swing",function(){$(".go-next").fadeIn("slow"),$("#TASLogo").fadeIn(),$(".go-pervious").fadeOut("slow"),$("#changelogView").html("<!--NULL--!>")})}function exit(){window.opener=null,window.open("","_self"),window.close()}function showChangelog(){$("body").css("overflow-y","scroll"),$(".go-next").fadeOut("fast"),loadingAnim=playLoadingAnim($("#changelogLoading")[0]),$("#changelogLoading").append("<br/>Loading..."),$("#TASLogo").fadeOut(),$("#bg").slideUp("slow"),$("#changelog").slideDown("slow","swing",function(){loadJS("http://vcheck.windit.net/mc_plugin/andylizi/colormotd/changelog.php",function(){loadingAnim.stop(),$("#changelogLoading").html("<!--NULL--!>");var a="<div>";data.split(/\n/g).forEach(function(b){var c,d;b.startWith("+ ")||b.startWith("- ")||b.startWith("* ")?(c=b.substr(2,b.length),d="",b.startWith("+ ")?d="add":b.startWith("- ")?d="remove":b.startWith("* ")&&(d="change"),a+="<span class='content "+d+"'>"+c+"</span><br/>"):"-----"==b||(a+=(a.endWith("<div>")?"":"</div>")+"<hr/><div><span class='header'>"+b+"</span><br>")}),$("#changelogView").html(a),$("#changelogView").slideDown("slow"),$(".go-pervious").fadeIn("slow")},function(){loadingAnim.stop(),$("#changelogLoading").html("<!--NULL--!>"),$("#changelogView").slideDown("slow"),$("#changelogView").html("<font size='+5' color='red'>ERROR</font>")})})}
