$(document).ready(function(){
    

    //for desktop
    let x = $("#one").width();

    //kredit
    let ksay = 0;
    $("#kredit").click(function(){
        $("#firstkredit").slideToggle("slow");
        $("#kredit").text(ksay? "Kredit":"Kreditin hesablanması");
        ksay = 1 - ksay;
        //$(this).css("margin","auto")
        


    });	
    

    //depozit
    let hsay = 0;
    $("#deposit").click(function(){
        $("#firstdeposit").slideToggle("slow");
        $("#deposit").text( hsay? "Depozit":"Depozitin hesablanması");
        hsay = 1 - hsay;
    });	

    
    //debet kart
    let zsay = 0;
    $("#card").click(function(){
        $("#firstcard").slideToggle("slow");
        $("#card").text( zsay? "Debet kart":"Debet kartların sifarişi");
        zsay = 1 - zsay;
    });	

    //valyuta
    let ysay = 0;
    $("#valyuta").click(function(){
        $("#firstvalyuta").slideToggle("slow");
        $("#valyuta").text( ysay? "Məzənnə":"Günün məzənnəsi");
        ysay = 1 - ysay;
    });	


});

$(document).ready(function(){});


