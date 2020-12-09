requirejs.config({
    paths : {
        'jquery' : '/lib/jquery'
    }
});
define(['jquery' , '/api/server.js','/js/modules/foot.js'],function($ , {getEcnData}, initFoot){
    
    //引入底部JS
    initFoot()

    var id = location.search.match(/id=([^&]+)/)[1];
    getEcnData(id).then((res)=>{
        initEcn(res);
    });

    function initEcn(data){
        $('#ecn-head').html(`
            <a href="/view/education.html">课程列表 ＞</a>
            <span>${data.title}</span>
        `);

        $('#ecn-body-left').html(`
            <img src="${data.img}">
        `);

        $('#ecn-body-right').html(`
            <h5>${data.title}</h5>
            <p>${data.brief}</p>
            <p>共${data.num}节</p>
            <span>￥</span>
            <span>${data.money}</span>
            <button>加入学习</button>
        `);

    }
});