requirejs.config({
    paths : {
        'jquery' : '/lib/jquery'
    }
});

define(['jquery' , '/api/server.js','/js/modules/foot.js'],function($ , {getxqjobData}, initFoot){
   
    const reg = /job/
    const reg2 = /id=(\d*)/
    if(reg.test(window.location.search)){
        getxqjobData().then((res)=>{  
           
          var id= window.location.search.match(reg2)[1]
           
          for(var i = 0;i<res.content_list.length;i++) {
              if(res.content_list[i].pageId==id){
                break 
              }
          }
            xrjob(res.content_list[i])
     })
    }



    function xrjob(data){
        var banner = $('#banner')
        var neirong =$('#neirong') 
        var trm =` <div id="content">
                        <div id="content-1">
                        <div class="gongsiming">${data.company}</div>
                        <div class="zhiwu">${data.position}</div>
                        <div class="yaoqiu"><span>${data.salary}</span>${data.requirement}</div>
                        <div clas="fenlei"><span class="baidi">${data.category}</span></div>
                        <div class="shijian">${data.time}</div>
                        </div>
                        <div id="content-2">
                            <div class="btn-small">
                                <span class="jubao"><a href="">举报</a></span>
                                <span class="weixin"><a href="">微信</a></span>
                                <span class="xiaochengxu"><a href="">小程序</a></span>
                            </div>
                            <div class="btn-big">
                                <span class="big-left">收藏</span>
                                <span class="big-right">投个简历</span><br>
                                <a href=""class="lianjie">完善在线简历</a>
                                <a href=""class="lianjie">上传附件简历</a>
                            </div>
                        </div>
                    </div>`

        var tmp = ` <div class="neirong_left">
                        <div class="neirong1">职位诱惑:<br>
                                <span>${data.welfare}</span>
                        </div>
                        <div class="neirong2">职位描述:
                      
                        ${data.describe.map((v)=>{
                            return `<div class="line">${v}</div>`
                        }).join('')
                    }
                         
                        </div>
                        <div class="neirong3">工作地址
                                <div class="line">${data.address}</div>
                        </div>
                        <div class="neirong4">职位发布者:
                
                                <div class="line">${data.HR}</div>
                                <div class="line">今日活跃</div>
                        </div>
                        <div class="neirong5">面试评价
                                <div class="line">该职位没有收到任何评价</div>
                        </div>
                </div>
                <div class="neirong_right">
                    <div class="logo">
                        <img src=" ${data.Company_information[0].company_logo} ">
                        <div class="name">${data.company}</div>
                    </div>
                    
                    <div class="tips">${data.Company_information[0].field}</div>
                    <div class="tips">${data.Company_information[0].Development}</div>
                    <div class="tips">${data.Company_information[0].scale}</div>
                    <div class="tips"> <a href="${data.Company_information[0].homepage}"> ${data.Company_information[0].homepage}</a></div>
                    <div class="guanggao">广</div>
                    <div class="guanggao">告</div>
                    <div class="guanggao">位</div>
                    <div class="guanggao">招</div>
                    <div class="guanggao">租</div>
                    <div class="guanggao">电</div>
                    <div class="guanggao">话</div>
                    <div class="guanggao">666</div>
                </div>`            
     banner.html(trm)
     neirong.html(tmp)


     
    }

});