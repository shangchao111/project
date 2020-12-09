

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
    // function getBookData(){
        // return $.ajax('/api/mock/book.json');
    // }
    // function getPadData(){
        // return $.ajax('/api/mock/pad.json');
    // }

    return {
        getBannerData,
        getBanner1Data,
        getPositionData,
        getRecommendationData
        // getPhoneData,
        // getBookData,
        // getPadData
    }


});