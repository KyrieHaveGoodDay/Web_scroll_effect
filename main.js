  

$("a").each(function (index, element) {
    console.log("編號"+index);
    
    var target= $(this).attr("data-st-target");
    var duration= $(this).attr("data-duration");
    var offsetTop = $(this).attr("data-st-offset");
    console.log("名稱"+target);
    console.log("時間"+duration);

    var offset = $("#" + target).offset();
    var top = offset.top;

    if (offsetTop) top -= offsetTop;

    console.log("上方：" + top);
    
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

