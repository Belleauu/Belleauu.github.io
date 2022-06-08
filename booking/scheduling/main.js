$(".dropdown-menu li a").click(function(){
    var selectedProfessional = $(this).attr('data-value');
    if (!(selectedProfessional === "")){
        document.getElementById("titleProfessional").innerHTML = selectedProfessional;
        document.getElementById("hiddenTitle").className = "d-block";
    }
});