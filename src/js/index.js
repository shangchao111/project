 
       
       require.config({
        paths : {
            'jquery' : '/lib/jquery',
            "bootstarp":"/lib/bootstrap",
            "popper" :"https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min"

        },
        shim: {
            'bootstrap': ['jquery']
          },
          map: {
            '*': {
              'popper.js': 'popper'
            }
          }
    });
      
        define(['jquery',"bootstarp","../api/server.js","/js/modules/foot.js","/js/modules/xiding.js"],function($,q,{getSBData,getIjobData,getPositionData,getEduCloumnData},initFoot,xiDing){
            initFoot()
            xiDing($('#header'),$('#siOut'))
            $('body').find('a').css("text-decoration","none")
            $('#footer').find('div').css('box-sizing','content-box')
            $('#footer').find('h3').css('height','22px')
            $('#footer').find('h3').css('font-size','18px')

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
     
            //  $('.siderbar-box').append($('<div class="xbox"><h2>技术</h2><a href="#">123</a><a href="#">123</a><a href="#">123</a></div>'))
             getSBData().then((res)=>{
                 var data =res.SB_list
                 
                 for(var i =0;i<data.length;i++){
                    $('.siderbar-box').eq(i).append($(`<div class="xbox"><h2>${data[i].h2}</h2></div>`))
                    
                    data[i].list.map((v)=>{
                    return $('.xbox').eq(i).append($(`<a href="#">${v}</a>`))
                    })
                 }
             // 防止鼠标移到轮播图按钮 xbox不显示
             $('.xbox').on('mouseover',function(){
                $(this).css('z-index','3')
                $(this).css({
                       display:'block',
                   })
            })

             })
             
             // 侧边栏选项卡显示隐藏
             $('.siderbar-box').append($('<span></span>'))
             $('.siderbar-box').children('span').css({
                 position:'absolute',
                 left:'314px',
                 top:'0',
                 width:'5px',
                 height:'47px',
                 'z-index':'0',
                 background:'#fff',
                 display:'none'
             })
             $('.siderbar-box').on('mouseover',function(){
                 
                 $(this).children('span').css({
                    'z-index':'6',
                    display:'block'
                 })
                 $(this).find('.siderbar-box-info').css('z-index','4')
                 $(this).find('.xbox').css({
                        display:'block',
                    })
             })
             $('.siderbar-box').on('mouseout',function(){
                $(this).children('span').css({
                    'z-index':'0',
                    display:'none'
                 })
                 
                 $(this).find('.siderbar-box-info').css('z-index','0')
     
                 $(this).find('.xbox').css({
                     display:'none',
                 })
             })
             
            // 渲染#main-three-job1
             var job1 = $('#main-three-job1')
             getIjobData().then((res)=>{
                var tmp= `<ul class="main-three-joblist">
                 ${res.ijob_list.map((v)=>{
                     return`<li data-id=${v.id}>
                     <div class="jli-top">
                         <div class="job-name"><a href="/view/xiangqing.html?type=${res.type}&id=${v.id}" target="_blank">${v.position}</a>
                             <span>${v.salary}</span>
                         </div>
                         <div class="wordcut">${v.requirement}</div>
                         <div class="labels">
                             
                             ${v.category.map((xv)=>{
                                 return`<div class="labels-lis">${xv}</div>`
                             }).join('')}
                         </div>
                     </div>
                     <div class="jli-bottom">
                         <img src="${v.company_logo}" alt="">
                         <div class="bottom-right">
                             <div class="con-name">${v.company}</div>
                             <div class="con-workcut">${v.field}</div>
                         </div>
                     </div>
                 </li>`
                 }).join('')
                }
             </ul>`
             job1.html(tmp)
             $('.main-three-joblist').find('a').css({
                 color:'#000',
                 "text-decoration": "none"

             })
             })
            //  渲染main-three-job2
             var job2 = $('#main-three-job2 a')
             getPositionData().then((res)=>{
                var data = res.lis
                 var tmp=''
                 for(var i=0;i<2    ;i++){
                  tmp=tmp+`<ul class="main-three-joblist">
                  ${data[i].positions_list.map((v)=>{
                      return`<li data-id=${v.companysId}>
                      <div class="jli-top">
                          <div class="job-name"><a href="#">${v.positionName}</a>
                              <span>${v.positionSalary}</span>
                          </div>
                          <div class="wordcut">${v.positionRequire.join(' / ')}</div>
                          <div class="labels">
                              
                              ${v.positionDescribe.map((xv)=>{
                                  return`<div class="labels-lis">${xv}</div>`
                              }).join('')}
                          </div>
                      </div>
                      <div class="jli-bottom">
                          <img src="${v.companysImg}" alt="">
                          <div class="bottom-right">
                              <div class="con-name">${v.companysName}</div>
                              <div class="con-workcut">${v.companysIntroduce}</div>
                          </div>
                      </div>
                  </li>`
                  }).join('')
                 }
              </ul>`
                 }
                
             job2.html(tmp)
             $('.main-three-joblist').find('a').css({
                 color:'#000',
                 "text-decoration": "none"

             })
             })


            //  渲染热门课程
            var kecheng = $("#kecheng1-list")
            getEduCloumnData().then((res)=>{
                var tmp =`<div id="kecheng1">
                ${res.eduColumn_list.map((v)=>{
                    return`<a href="http://localhost:3000/view/educolumn.html?id=${v.id}" target="_blank">
                    <img src="${v.img}" class="l">
                    <div id="column-right">
                       <div class="column-right-title">${v.title}</div>
                       <div class="column-right-brief">${v.brief}</div>
                       <div class="column-right-teacher">${v.teacher}</div>
                       <div class="column-right-btm">
                          <span>￥</span>
                          <span>${v.money}</span>
                          <span>${v.people}</span>
                       </div>
                    </div>
                    <button>试看</button>
                </a>`
                }).join('')
            }
                    </div>`
                    kecheng.html(tmp)
                    $('#main-five-kecheng').find('a').css('box-sizing','content-box')
                    $('body').find('a').css("text-decoration","none")

            })



            //  two-list选项卡切换

            function xxkqh(elem1){
                elem1.children().on("click",function(){
                    console.log($(this));
                    $(this).addClass('current')
                    $(this).siblings().removeClass('current')
                    elem1.next().children().eq($(this).index()).css('display','block')
                    elem1.next().children().eq($(this).index()).siblings().css('display','none')
                })
            }
            xxkqh($('#main-two-list'))
        });
        