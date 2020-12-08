
requirejs.config({
    paths : {
        'jquery' : '/lib/jquery'
    }
});
define(['jquery' , '/api/server.js'],function($ , {getEduCloumnData}){
    console.log(getEduCloumnData);
    getEduCloumnData().then((res)=>{
        initcloumn('#column' , res);
    });
    // 初始化商品
    function initcloumn(parentId, data) {

        var $parent = $(parentId);
        var tmp = data.eduColumn_list.map((v, i) => {
            return `
                    <a href="${v.link}">
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
        }).join('').repeat(10)
        console.log(tmp);
        $parent.html(tmp);
    }
});