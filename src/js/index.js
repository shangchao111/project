 
       
       $('#footer').find('div').css('box-sizing','content-box')
       $('#footer').find('h3').css('height','22px')
       $('#footer').find('h3').css('font-size','18px')
       $('#header-place').find('span').css('color','#afb5c0')
       
    //    console.log($('#footer').find('div'));
 // 修改插件轮播图左右按钮的默认大小，隐藏，位置
        // 按钮图标大小，隐藏
        $('.carousel-control-prev-icon,.carousel-control-next-icon').css({
            width:40,
            height:40,
            display:'none',
        })
        // 左右按钮位置
        $('.carousel-control-next,.carousel-control-prev').css({
            'width':40,
            'height':40,
            'position':'absolute;',
            'top':'50%',
            'margin-top':'-30px',
        })
        


        // 轮播图左右按钮显示隐藏事件
        $('#carouselExampleIndicators').on('mousemove',function(){
            $('.carousel-control-prev-icon,.carousel-control-next-icon').css('display','block')
        })
        $('#carouselExampleIndicators').on('mouseout',function(){
            $('.carousel-control-prev-icon,.carousel-control-next-icon').css('display','none')
        })

        // 生成隐藏的侧边栏

        $('.siderbar-box').append($('<div class="xbox"><h2>技术</h2><a href="#">123</a><a href="#">123</a><a href="#">123</a></div>'))


        // 侧边栏选项卡显示隐藏
        $('.siderbar-box').on('mouseover',function(){
            $(this).css({
                   border:'1px solid rgb(232, 232,232)',
                   'border-right':0,
               })
            $(this).find('.siderbar-box-info').css('z-index','4')
            $(this).find('.xbox').css({
                   display:'block',
               })
        })
        $('.siderbar-box').on('mouseout',function(){
            $(this).css({
                   border:'1px solid #fff',
                   'border-right':0,
            })
            $(this).find('.siderbar-box-info').css('z-index','0')

            $(this).find('.xbox').css({
                display:'none',
            })
        })
        // 防止鼠标移到轮播图按钮 xbox不显示
        $('.xbox').on('mouseover',function(){
            $(this).css('z-index','3')
            $(this).css({
                   display:'block',
               })
        })
        