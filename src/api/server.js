define(['jquery'] , function($){
    function getEduCloumnData(){
        return $.ajax('/api/mock/educolumn.json')
    }
    function getSBData(){
        return $.ajax('/api/mock/isbn.json')
    }
    function getIjobData(){
        return $.ajax('/api/mock/ijob.json')
    }
    return{
        getEduCloumnData,
        getSBData,
        getIjobData

    }
})