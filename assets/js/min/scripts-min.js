!function($,t,o,e,i){"use strict";t.Location=null,$(function(){function o(t,o){return Math.floor(Math.random()*(o-t+1))+t}function i(t){$(".content__wrapper").css("background-image",'url("'+t.time[l].image[b].img+'")'),r=moment().add(t.time[l].localTime,"hours").format("LT"),$(".local__time").find("span").html(r),t.time[l].image[b].author?($(".content__author").show(),$(".mobile__content__author").css("visibility","visible"),$(".content__author a, .mobile__content__author a").text(t.time[l].image[b].author).attr("href",t.time[l].image[b].url)):($(".mobile__content__author").hide(),$(".mobile__location-info__copy").css("top","30%"),$(".content__author").hide()),$(".content__location-info__title, .mobile__location-info__title .top, .content__title_top").text(t.time[l].city),$(".content__title_sub, .mobile__location-info__title .sub").text(t.time[l].image[b].location),$(".content__location-info__copy, .mobile__location-info__copy").text(t.time[l].locationInformation)}function n(){$.getJSON("./assets/js/location.json",function(t){}).done(function(t){i(t),$(".demo select").change(function(){_=$(this).val(),m=o(0,2),a(),$(".content__wrapper").css("background-image",'url("'+t.time[_].image[m].img+'")'),$(".local__time").find("span").html(t.time[_].localTime),t.time[_].image[m].author?(c()?($(".content__author").hide(),$(".mobile__content__author").show()):($(".content__author").show(),$(".mobile__content__author").hide()),$(".content__author a, .mobile__content__author a").text(t.time[_].image[m].author).attr("href",t.time[_].image[m].url)):$(".content__author, .mobile__content__author").hide(),$(".content__location-info__title, .mobile__location-info__title, .content__title").text(t.time[_].image[m].location),$(".content__location-info__copy, .mobile__location-info__copy").text(t.time[_].locationInformation)})}).fail(function(t,o,e){console.log(t,o,e)})}function a(){var t=$(".content__location-info__title").height(),o=$(".content__location-info hr").height(),e=$(".content__location-info__copy").height(),i=t+o+e+150;console.log(i),$(".content__location-info").css("height",i)}function c(){var o=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(o=!0)}(navigator.userAgent||navigator.vendor||t.opera),o}var l,_,r,m,s=$(".content__location-btn"),u=$(".content__location-info"),h=u.find("hr"),p=$(".content__location-info__title"),d=$(".content__location-info__copy"),f=$(".modal"),g=$(t).width();l=moment().hour();var b=o(0,2);if(n(),console.log(768>g),c()||768>g){var w=new e({paused:!0});w.to([$(".introPanel__header--intro"),$(".introPanel__header__hr"),$(".introPanel__text--p")],.3,{autoAlpha:0}).staggerTo([$(".mobile__location-info__title"),$(".mobile__location-info__hr"),$(".mobile__content__author"),$(".mobile__location-info__copy"),$(".mobile__location-info__social")],.4,{delay:"0.1",autoAlpha:1,y:"-10px"},.2),$(".introPanel__button").click(function(){w.play(),$(this).fadeOut(200,function(){$(".curtain__panel--left img").animate({width:"50px",marginLeft:"0"},{duration:1e3}),$(".curtain__panel--right img").animate({width:"50px",marginRight:"0"},{duration:1e3})})})}else{var v=new e({paused:!0});v.to(f,.4,{autoAlpha:1}).to(u,.5,{bottom:"0%",ease:Circ.easeOut}).to([d,p,h],.3,{opacity:1,y:"-10px"},"-=.1"),s.on("click",function(){$(this).addClass("modal--open"),v.play()}),$(".close-btn").on("click",function(){s.removeClass("modal--open"),v.reverse()});var k=new e({paused:!0});k.to(s,.2,{y:"-10px"}),s.mouseenter(function(){k.play()}),s.mouseleave(function(){k.reverse()}),$(".introPanel__button").click(function(){$(".introPanel").fadeOut(200,function(){var t=new e({paused:!0});t.to($(".curtain__panel--right img"),2,{width:"150px",marginRight:"5px",ease:Back.easeInOut.config(.5)}).to($(".curtain__panel--left img"),2,{width:"150px",marginLeft:"20px",ease:Back.easeInOut.config(.5)},"-=2"),t.play()})})}$(".header span").on("click",function(){$(".header").hasClass("header--active")?($(this).parent().removeClass("header--active"),$(this).removeClass("share--open"),$(".social").fadeOut(100,function(){$(".social__modal").fadeOut(200)})):($(this).parent().addClass("header--active"),$(this).addClass("share--open"),$(".social__modal").fadeIn(100,function(){$(".social").fadeIn(200)}))}),$(t).load(function(){$(".preloader").fadeOut("slow",function(){$(this).remove()}),a()}),$(t).resize(function(){a()})})}(jQuery,window,document,TimelineMax);