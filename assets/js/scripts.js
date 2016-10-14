/*!
 * Curtains
 * Curtains
 * https://curtains.com/
 * @author 
 * @version 1.0.0
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, TimelineMax, undefined) {

  'use strict';

    window.Location = null;

  $(function () {

    var hour, demoTime, local, newRandom, $contentLocationBtn = $('.content__location-btn'), $contentLocationInfo = $('.content__location-info'), $contentLocationInfoHr = $contentLocationInfo.find('hr'),  $contentLocationInfoTitle = $('.content__location-info__title'), $contentLocationInfoCopy = $('.content__location-info__copy'), $modal = $('.modal'), windowWidth = $(window).width();

    hour =  moment().hour();

    // Return a number from 1 - 5
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var random = getRandomInt(0, 2);

    function populateContent(data) {
        $('.content__wrapper').css('background-image', 'url("' + data.time[hour].image[random].img + '")');
        local = moment().add(data.time[hour].localTime, 'hours').format('LT')
        $('.local__time').find('span').html(local);
        if(data.time[hour].image[random].author) {
            $('.content__author').show();
            $('.mobile__content__author').css('visibility', 'visible');
            $('.content__author a, .mobile__content__author a').text(data.time[hour].image[random].author).attr('href', data.time[hour].image[random].url);
        } else {
            $('.mobile__content__author').hide();
            $('.mobile__location-info__copy').css('top', '30%');
            $('.content__author').hide();
        }
        $('.content__location-info__title, .mobile__location-info__title .top, .content__title_top').text(data.time[hour].city);
        $('.content__title_sub, .mobile__location-info__title .sub').text(data.time[hour].image[random].location);
        $('.content__location-info__copy, .mobile__location-info__copy').text(data.time[hour].locationInformation);
    }



    function loadLocation() {
        // gets hotel information
        $.getJSON('./assets/js/location.json', function (data) {
        }).done(function(data) {
            populateContent(data);
            $('.demo select').change(function() {
                demoTime = $(this).val();
                newRandom = getRandomInt(0, 2);
                setContentHeight();
                $('.content__wrapper').css('background-image', 'url("' + data.time[demoTime].image[newRandom].img + '")');
                        $('.local__time').find('span').html(data.time[demoTime].localTime);
                if(data.time[demoTime].image[newRandom].author) {
                    if(mobileTabletCheck()){
                        $('.content__author').hide();
                        $('.mobile__content__author').show();
                    } else {
                        $('.content__author').show();
                        $('.mobile__content__author').hide();
                    }
                    $('.content__author a, .mobile__content__author a').text(data.time[demoTime].image[newRandom].author).attr('href', data.time[demoTime].image[newRandom].url);
                } else {
                    $('.content__author, .mobile__content__author').hide();
                }

                $('.content__location-info__title, .mobile__location-info__title, .content__title').text(data.time[demoTime].image[newRandom].location);
                $('.content__location-info__copy, .mobile__location-info__copy').text(data.time[demoTime].locationInformation);
            });

        }).fail(function( jqxhr, textStatus, error ) {
            console.log(jqxhr, textStatus, error);
        });
    }

    loadLocation();

    console.log(windowWidth < 768);
    if (mobileTabletCheck() || windowWidth < 768) {
        // mobile
        var mobileShowContent = new TimelineMax({ paused: true});
            mobileShowContent.to([$('.introPanel__header--intro'), $('.introPanel__header__hr'), $('.introPanel__text--p')], 0.3, {autoAlpha: 0})
            .staggerTo([$('.mobile__location-info__title'), $('.mobile__location-info__hr'), $('.mobile__content__author'), $('.mobile__location-info__copy'), $('.mobile__location-info__social')], 0.4, {delay: '0.1', autoAlpha: 1, y: '-10px'}, 0.2);

        $('.introPanel__button').click(function(){
            mobileShowContent.play();
            $(this).fadeOut(200, function() {
                $('.curtain__panel--left img').animate({ width: '50px', marginLeft: '0' },{duration: 1000});
                $('.curtain__panel--right img').animate({ width: '50px', marginRight: '0' },{duration: 1000});
            });
        });
    } else {
        var openModal = new TimelineMax({ paused: true});
            openModal
            .to($modal, 0.4, {autoAlpha: 1})
            .to($contentLocationInfo, 0.5, {bottom: '0%', ease: Circ.easeOut})
            .to([$contentLocationInfoCopy, $contentLocationInfoTitle, $contentLocationInfoHr], 0.3, {opacity: 1, y: '-10px'}, '-=.1');
        $contentLocationBtn.on('click', function() {
            $(this).addClass('modal--open');
            openModal.play();
        });
        $('.close-btn').on('click', function() {
            $contentLocationBtn.removeClass('modal--open');
            openModal.reverse();
        });
        var locationHover = new TimelineMax({paused: true});
            locationHover.to($contentLocationBtn, 0.2, {y: '-10px'});

        $contentLocationBtn.mouseenter(function() {
          locationHover.play();
        });
        $contentLocationBtn.mouseleave(function() {
          locationHover.reverse();
        });
        $('.introPanel__button').click(function(){
            $('.introPanel').fadeOut(200, function() {
                var desktopCurtainAnimation = new TimelineMax({paused: true});
                    desktopCurtainAnimation.to($('.curtain__panel--right img'), 2, {width: '150px', marginRight: '5px', ease: Back.easeInOut.config(0.5)})
                    .to($('.curtain__panel--left img'), 2, {width: '150px', marginLeft: '20px', ease: Back.easeInOut.config(0.5) }, '-=2');
                    desktopCurtainAnimation.play();
            });
        });
    }

    $('.header span').on('click', function() {
        if($('.header').hasClass('header--active')) {
            $(this).parent().removeClass('header--active');
            $(this).removeClass('share--open');
            $('.social').fadeOut(100, function() {
                $('.social__modal').fadeOut(200);
            });
        } else {
            $(this).parent().addClass('header--active');
            $(this).addClass('share--open');
            $('.social__modal').fadeIn(100, function() {
                $('.social').fadeIn(200);
            });
        }
    });

$(window).load(function(){
    $('.preloader').fadeOut('slow',function(){$(this).remove();});
    setContentHeight();
});

$(window).resize(function(){
    //location.reload();
    setContentHeight();
});


    function setContentHeight() {
        var titleHeight = $('.content__location-info__title').height(), hrHeight = $('.content__location-info hr').height(), textHeight =  $('.content__location-info__copy').height();
        var contentLocationBox = titleHeight + hrHeight + textHeight + 150;
        console.log(contentLocationBox);
        $('.content__location-info').css('height', contentLocationBox);
    }


      function mobileTabletCheck() {
            var check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                  return check;
        }

});

})(jQuery, window, document, TimelineMax);
