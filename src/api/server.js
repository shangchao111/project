

// 所有的数据的接口提供给外面
define(['jquery'] , function($){


    //jquery中的ajax也提供了promise用法

    function getBannerData(){
        return $.ajax('/api/mock/banner.json');
    }
    function getBanner1Data(){
        return $.ajax('/api/mock/banner1.json'); 
    }
    function getPositionData(){
        return $.ajax('/api/mock/hotposition.json');
    }
    function getRecommendationData(){
        return $.ajax('/api/mock/recommendation.json');
    }
    function getEduCloumnData(){//专栏
        return $.ajax('/api/mock/educolumn.json')
    }
    function getEduCampData(){//专栏
        return $.ajax('/api/mock/educamp.json')
    }
    function getEduBannerData(){//轮播图
        return $.ajax('/api/mock/edubanner.json')
    }
    function getSBData(){
        return $.ajax('/api/mock/isbn.json')
    }
    function getIjobData(){
        return $.ajax('/api/mock/ijob.json')
    }
    function getEcnData(id){
        var promise = new Promise(function(resolve,reject){
            $.ajax('/api/mock/educolumn.json').then((res)=>{
                for(var i=0;i<res.eduColumn_list.length;i++){
                    if(res.eduColumn_list[i].id == id){
                        resolve(res.eduColumn_list[i]);
                    }
                }
            });
        });
        return promise;
    }

    function getxqjobData(){
        return $.ajax('/api/mock/xqjob.json')
    }
    return {
        getBannerData,
        getBanner1Data,
        getPositionData,
        getRecommendationData,
        getEduCloumnData,
        getEduBannerData,
        getEduCampData,
        getEduCloumnData,
        getSBData,
        getIjobData,
        getEcnData,
        getxqjobData
    }
})
