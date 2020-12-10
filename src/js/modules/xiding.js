define(['jquery'],function($){
    // elem1第一个元素，elem2第二个元素可以为空
    function xiDing(elem1,elem2){  
     if(!elem2){
         elem2=''
     }
     $('body').prepend('<div id="d1"></div>')
     $('#d1').css('height',0)
     var e1top =elem1.offset().top
         var e2top =elem2.offset().top
         console.log(e2top+elem2.outerHeight());
     $(window).scroll(function(){
         var top =$(document).scrollTop()
         console.log(top);
         
         
         if(top>=e1top+elem1.outerHeight()){
            $('#d1').css("height",elem1.outerHeight())
            elem1.css({
                 position: "fixed",
                 top:'0',
                 'z-index':100
                 
             })
             
         if(top>=e2top/* +elem2.outerHeight() *//*-elem1.outerHeight()*/){
                console.log($('#d1').css("height"));
                    elem2.css({
                    top:elem1.outerHeight(),
                    position: "fixed",
                    'z-index':100
                })
                
                
        }else{
               elem2.css({
                   position: "static",
                   
                   
               })
               $('#d1').css("height",elem1.outerHeight())
    
            }
         }else{
            elem1.css({
                position: "static",
                
            })
            $('#d1').css("height",0)

         }
        
     })
    }
    return xiDing;
});