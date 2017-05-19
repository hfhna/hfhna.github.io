$('#fullpage').fullpage({
    'verticalCentered': false,
    'css3': true,
    'sectionsColor': ['#254875', '#fff', '#fff','#5E4BFF'],
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple','footer'],//提示文字

    fixedElements:".header1,.next,.header2",
    menu:".header1",
    /* continuousVertical:true,*/
    afterLoad:function(an,index){
        if(index==1){
            $(".content div").animate({left:130});
            $(".content span").animate({right:130})
        }else if(index==5){
            $(".next").css("transform","rotate(180deg)").addClass("active");
        }else if(index==2){
            $(".penc").animate({left:120});
            $(".devc").animate({top:160,left:450});
            $(".cak").animate({right:120});
        }
    },
    onLeave:function(index,nextIndex,diraction){
        if(index==1){
            $(".content div").animate({left:-400});
            $(".content span").animate({right:-430})
        }else if(index==5){
            $(".next").css("transform","rotate(0deg)").removeClass("active");
        }else if(index==2){
            $(".penc").animate({left:-400});
            $(".devc").animate({top:-500,left:450});
            $(".cak").animate({right:-400});
        }
    }

})
$(".next").click(function () {
    if($(this).hasClass("active")){
        $.fn.fullpage.moveTo(1);
    }else{
        $.fn.fullpage.moveSectionDown();
    }

})

