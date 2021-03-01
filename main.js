  

$("a").each(function (index, element) {
    // console.log("編號"+index);
    
    var target= $(this).attr("data-st-target");
    var duration= $(this).attr("data-duration");
    var offsetTop = $(this).attr("data-st-offset");
    // console.log("名稱"+target);
    // console.log("時間"+duration);

    var offset = $("#" + target).offset();
    var top = offset.top;

    if (offsetTop) top -= offsetTop;

    // console.log("上方：" + top);
    
    $(this).click(function (e) { 
        e.preventDefault();
        $("html").stop().animate({
            scrollTop:top
        }, parseInt(duration));
    });
    
});

$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#gotop");
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    console.log("視窗上方位置：" + windowTop);

    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime);  
    // console.log("箭頭要出現的位置：" +  arrowTop);
    // console.log("箭頭特效的時間　：" + arrowTime);

    if( windowTop >= arrowTop)arrow.stop().fadeIn(arrowTimeInt)
    else arrow.fadeOut(arrowTimeInt)
    
});

