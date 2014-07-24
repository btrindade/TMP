 $(document).ready(function(){
    
  
     
    
    //CONTAGEM OFERTA    
    
    $("#contagem p").countdown({
        
        date: "july 11, 2014 19:24",
        onChange: function( event, timer ){
 
        },
        onComplete: function( event ){
 
            $(this).html("Expirado");
        },
        minus: false,
        leadingZero: true
        //template: '%: %: %: %: %s'
    });

    
    // MENU
    
     $("#menu ul li").hover(function(){
        $(this).find(".subnav").parent().addClass("sub");
     });
     
     $("#busca-topo .categorias-busca").click(function(){
         var opt = $(this).parent().find(".opcoes-cidades");
        if (opt.is(":visible")){
            opt.hide();
        }else{
            opt.show();
        }
     });
     
     $(".opcoes-cidades ul li a").click(function(){
         var v = $(this).text();
         $(".categorias-busca").text(v);
        $(this).parents('.opcoes-cidades').hide();
     });
     
    
    $('.chosen-select').chosen();
    
    
    // TIP
    
    $(".carrinho #login a").hover(function(){       
       if($(this).attr("data-title") != ''){
            $(this).append("<div class='tip'><span></span>" + $(this).attr("data-title") + "</div>");
       }       
    },function(){
        if($(this).attr("data-title") != ''){
       $(this).find(".tip").remove(); 
        }
    });
    
    
    //CÓDIGO PROMOCIONAL
    
     $(".tenho-codigo").click(function(){
        if($(this).is(":checked")){
            $("#codigo-promo").show();
        }else{
            $("#codigo-promo").hide();
        }
    });
    
    $(".quiero-regalar").click(function(){
        if($(this).is(":checked")){
            $("#regalar").show();
        }else{
            $("#regalar").hide();
        }
    });
    
    //NYROMODAL
    
    $(".nyromodal").nyroModal();
   
    //CARROSSEL OFERTA
        
    $(".carrossel").jcarousel();
    
    $('.esquerda').on('jcarouselcontrol:active', function() {
    }).jcarouselControl({
        target: '-=1'
    });

    $('.direita').on('jcarouselcontrol:inactive', function() {
    }).jcarouselControl({
        target: '+=1'
    });
    
    
    // ROLAGEM DESCRIÇÃO DE OFERTA
    
    var step = 25;
    var scrolling = false;


    $("#scrollUp").bind("click", function(event){
        event.preventDefault();
        $(".scroll").animate({
            scrollTop: "-=" + step + "px"
        });
    }).bind("mouseover", function(event){
        scrolling = true;
        scrollContent("up");
    }).bind("mouseout", function(event){
        scrolling = false;
    });


    $("#scrollDown").bind("click", function(event){
        event.preventDefault();
        $(".scroll").animate({
            scrollTop: "+=" + step + "px"
        });
    }).bind("mouseover", function(event) {
        scrolling = true; 
        scrollContent("down");
    }).bind("mouseout", function(event) {
        scrolling = false;
    });

    function scrollContent(direction){
        var amount = (direction === "up" ? "-=1px" : "+=1px");        
        $(".scroll").animate({
            scrollTop: amount
        }, 1, function() {
            if (scrolling) {
                scrollContent(direction);
            }
        });
    }
    
});