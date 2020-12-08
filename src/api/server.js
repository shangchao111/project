define(['jquery'] , function($){
    function getEduCloumnData(){//专栏
        return $.ajax('/api/mock/educolumn.json')
    }
    function getEduCampData(){//专栏
        return $.ajax('/api/mock/educamp.json')
    }
    function getEduBannerData(){//轮播图
        return $.ajax('/api/mock/edubanner.json')
    }
    return{
        getEduCloumnData,
        getEduBannerData,
        getEduCampData
    }
})