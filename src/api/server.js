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
    return{
        getEduCloumnData,
        getEduBannerData,
        getEduCampData,
        getEduCloumnData,
        getSBData,
        getIjobData,
        getEcnData
    }
})