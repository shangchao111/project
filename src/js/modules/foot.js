define(['jquery'],function($){
    function initFoot(){
        $('#footer-top-left-app').mouseover(function(){
            $('#footer-top-left-app span').css('display','block')
        }).mouseout(function(){
            $('#footer-top-left-app span').css('display','none')
        })
        $('#footer-top-left-wx').mouseover(function(){
            $('#footer-top-left-wx span').css('display','block')
        }).mouseout(function(){
            $('#footer-top-left-wx span').css('display','none')
        })
    }
    return initFoot;
});