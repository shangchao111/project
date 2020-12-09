requirejs.config({
    paths : {
        'jquery' : '/lib/jquery'
    }
});

define(['jquery' , '/api/server.js','/js/modules/foot.js'],function($ , {getEduCloumnData,getEduBannerData,getEduCampData}, initFoot){
    //引入底部JS
    initFoot()
    //获取专栏信息
    getEduCloumnData().then((res)=>{
        initcloumn('#edu-column' , res);
    });
    function initcloumn(parentId, data) {
        var $parent = $(parentId);
        var tmp = `<p>专栏</p>`+data.eduColumn_list.map((v, i) => {
            return `
                    <a target="_blank" href="/view/educolumn.html?id=${v.id}">
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
                    </a>`;
        }).join('').repeat(5)
        $parent.html(tmp);
    }

    //获取训练营信息
    getEduCampData().then((res)=>{
        initcamp1('#edu-camp-buttom' , res);   
    });
    function initcamp1(parentId, data) {
            var $parent = $(parentId);
            var tmp = data.eduCamp_list1.map((v, i) => {
            return `
            <a href="${v.link}">
                <img src="${v.img}">
            </a>`;
        }).join('')
        $parent.html(tmp);
    }
    function initcamp2(parentId, data) {
            var $parent = $(parentId);
            var tmp = data.eduCamp_list2.map((v, i) => {
            return `
            <a href="${v.link}">
                <img src="${v.img}">
            </a>`;
        }).join('') 
        $parent.html(tmp);
    }

    //训练营JS
    $('#edu-camp-top span').click(function(){
        if($(this).html() == '展开 ∨'){
            $(this).html('收起 ∧')
            getEduCampData().then((res)=>{
                initcamp2('#edu-camp-buttom' , res);   
            });  
        }else{
            $(this).html('展开 ∨')
            getEduCampData().then((res)=>{
                initcamp1('#edu-camp-buttom' , res);   
            });
        }
    })
    
    //获取轮播图信息
    getEduBannerData().then((res)=>{
        initbanner1('#edu-banner-ul' , res);
        initbanner2('#edu-banner-right' , res);
        right()
    });
    function initbanner1(parentId, data) {
        var $parent = $(parentId);
        var tmp = data.eduBanner_list.map((v, i) => {
            return `
                <li><a href="${v.link}"><img src="${v.img}"></a></li>`
            }).join('')       
        $parent.html(tmp);
        $('#edu-banner ul>li').eq(0).attr('class','active')
    }
    function initbanner2(parentId, data) {
        var $parent = $(parentId);
        var tmp = data.eduBanner_list.map((v, i) => {
            return `
            <li><span>◀</span>${v.title}</li>`
            }).join('')       
        $parent.html(tmp);
        $('#edu-banner-right li').eq(0).attr('class','show').siblings().attr('class','');
    }

    //轮播图JS
    var $timer;
    var now = 0;
    $('#edu-banner ol li').mouseover(function(){
        $(this).attr('class','active').siblings().attr('class','');
        $('#edu-banner ul li').eq( $(this).index() ).attr('class','active').siblings().attr('class',''); 
        $('#edu-banner-right li').eq( $(this).index() ).attr('class','show').siblings().attr('class','');
    })
    function right(){
        $('#edu-banner-right li').mouseover(function(){
            $(this).attr('class','show').siblings().attr('class','');
            $('#edu-banner ul li').eq( $(this).index() ).attr('class','active').siblings().attr('class',''); 
            $('#edu-banner ol li').eq( $(this).index() ).attr('class','active').siblings().attr('class','');
        })
    } 
    $timer = setInterval(run,3000);
    $('#edu-banner').mouseover(function(){
        clearInterval($timer);
    })
    $('#edu-banner').mouseout(function(){
        $timer = setInterval(run,3000);
    })
    function run(){
        if(now == $('#edu-banner ol li').length-1){
            now = 0;
        }
        else{
            now++;
        }
        $('#edu-banner ol li').eq(now).attr('class','active').siblings().attr('class','');
        $('#edu-banner ul li').eq(now).attr('class','active').siblings().attr('class',''); 
        $('#edu-banner-right li').eq(now).attr('class','show').siblings().attr('class','');
    }

});