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
function splashAnim(a,b){var c=!1;setInterval(function(){c?(a.css("width",parseFloat(a.css("width"))+1+"px"),a.css("height",parseFloat(a.css("height"))+1+"px"),a.css("right",parseFloat(a.css("right"))-.5+"px"),a.css("top",parseFloat(a.css("top"))-.5+"px"),parseInt(a.css("height"))>154&&(c=!1)):(a.css("width",parseFloat(a.css("width"))-1+"px"),a.css("height",parseFloat(a.css("height"))-1+"px"),a.css("right",parseFloat(a.css("right"))+.5+"px"),a.css("top",parseFloat(a.css("top"))+.5+"px"),parseInt(a.css("height"))<134&&(c=!0))},b)}function switchButtonAnim(){var a=$(".go-next,.go-pervious"),b=!0;setInterval(function(){b?(a.css("height",parseInt(a.css("height"))+1+"px"),parseInt(a.css("height"))>=70&&(b=!1)):(a.css("height",parseInt(a.css("height"))-1+"px"),parseInt(a.css("height"))<=40&&(b=!0))},20),$(".go-next").click(function(){return a.fadeOut("fast"),next()}),$(".go-pervious").click(function(){return a.fadeOut("fast"),pervious()})}