
define(['jquery'],function($){
    
    //初始化banner
    function initBanner($elem,data){
        var tmp = `
            <ul class="pic">
                ${
                    data.banner_list.map((v,i)=>{
                        return `<li class="l"><a href="${v.imgLink}" target="_blank"><img src="${v.imgUrl}" alt=""></a></li>`;
                    }).join('')
                }
            </ul>
            <ol class="icon">
                ${
                    data.banner_list.map((v,i)=>{
                        return `<li class="${ i == 0 ? 'active' : '' }"></li>`;
                    }).join('')
                }
            </ol>
        `;
        $elem.html(tmp);
        bindBanner($elem);
        run($elem); 
        var now = 0;
        function bindBanner($elem){
            var $olLis = $elem.find('ol li');
            var $ul = $elem.find('ul');
            $olLis.on('click',function(){
                $ul.css('left',-$elem.width() * $(this).index());
                $(this).attr('class','active').siblings().attr
        ('class','');
                now =  $(this).index();
            });
        }
            
        function run($elem){
            var $olLis = $elem.find('ol li');
            var $ul = $elem.find('ul');
            var timer = setInterval(function(){
                if(now == $olLis.length-1){  
                    now = 0;
                }
                else{
                    now++;
                }
                for(var i=0;i<$olLis.length;i++){
                    $olLis[i].className = '';
                }
                $olLis[now].className = 'active';
                $ul.css('left',-$elem.width()* now)
            },2000);
        }
            
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    return initBanner;

});