define(['jquery'] , function($){
    function getEduCloumnData(){
        return $.ajax('/api/mock/educolumn.json')
    }
    return{
        getEduCloumnData
    }
})