

requirejs.config({
    paths : {
        'jquery' : '/lib/jquery'
    }
});

// require.js的时候，如果引入绝对路径，需要带有后缀名

define(['jquery' , '/api/server.js' , '/js/modules/banner.js'],function($ , { getBannerData , getBanner1Data,getPositionData,getRecommendationData} , initBanner){

    getBannerData().then((res)=>{
        //console.log(res);
        var $bannerList = $('.img');
        initBanner($bannerList,res);
    });

    getBanner1Data().then((res)=>{
        //console.log(res);
        var $dd = $('.dd')
        initBanner($dd,res);
    });
    let index=0;
    let a=[];
    getPositionData().then((res)=>{
        initPositions('.position-list' , res,index);
        a = res;
    });

    getRecommendationData().then((res)=>{
        initRecommendation('.company' , res);
    })
  
    // getBookData().then((res)=>{
        // initGoods('#book' , res);
    // });
    // getPadData().then((res)=>{
        // initGoods('#pad' , res);
    // });
    function tab(){
        var lis = $('#hot-position li')
        //console.log(lis);
        lis.on('click',function(){
             index=$(this).index()
                initPositions('.position-list' , a,index);
            $(this).addClass('active').siblings().removeClass('active')
        })
    }
    tab()
    // 初始化热门职位
    function initPositions( parent , data,index ){
        var $parent = $(parent);
        //console.log(data.lis[index]);
        var tmp = 
            data.lis[index].positions_list.map((v, i) => {
                return `
                <div class="position-info l">
                    <div class="div">
                        <div class="slary clearfix">
                            <a href="#" 
                    class="l">${v.positionName}</a>
                        <span 
                class="r">${v.positionSalary}</
                span>
                    </div>
                    <div class="div2">

                    ${v.positionRequire.map((v,i)=>{
                        return `<span>${v}</span>`
                    }).join(" / ")}      
                    </div>
                    <div class="div3">
                        ${v.positionDescribe.length?v.positionDescribe.map((v,i)=>{
                           
                            return `<span>${v}</span>`
                        }).join(""):`<div style="height:46px"></div>`}      
                    </div>
                    </div>
                <div  
                class="company-position-info">
                    <img src="${v.companysImg}" alt="" 
                class="l">
                    <div>
                        <div>
                            <p>${v.companysName}</p>
                        </div>
                        <div>
                           <p>${v.companysIntroduce}</p>
                        </div>
                    </div>
                </div> 
                </div>
                    `
                }).join('')
        $parent.html(tmp);
    }


    //初始化热门推荐
    function initRecommendation(parent , data){
        var $uls = $(parent).find('ul');
        console.log($uls);
        var a
        for(var i=0;i<$uls.length;i++){
            console.log($uls);
             a ='lis'+i;
            console.log(a);

            var tmp = 
            data.positions_list['lis'+i].map((v,i)=>{

                return `
                <li>
                   <img src="${v.companysImg}" alt="">
                   <div>
                       <p>${v.companysName}</p>
                       <p>
                       ${v.positionRequire.map((v,i)=>{
                        return `<span>${v}</span>`
                        }).join(" / ")}      
                        </p>
                    </div>
                </li>  `
            }).join('')
            $($uls[i]).html(tmp);
        }   
    }

   
   
   
   
   
   
   
   
   

});