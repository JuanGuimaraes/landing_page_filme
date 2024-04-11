document.addEventListerner('DOMContentLoaded', function(){

    function fAbreGuias() {
        var vGuias = document.getElementById('guias');
            vGuias.addEventListener ('click', function() {
                vGuias.toggle("hide");
            }) 
        } 
})
