$(document).ready(function(){
    let saygac = 0;

    $("#kredit").click(function(){
        $("#firstkredit").slideToggle("slow");
        $("#kredit").text(saygac? "Kredit":"Kreditin hesablanması");
        saygac = 1 - saygac;

    });	

    let hsay = 0;
    $("#deposit").click(function(){
        $("#firstdeposit").slideToggle("slow");
        $("#deposit").text( hsay? "Depozit":"Depozitin hesablanması");
        hsay = 1 - hsay;
    });	
});

$(document).ready(function(){
  
});


