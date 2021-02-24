  

$("a").each(function (index, element) {
    console.log("編號"+index);
    
    var target= $(this).attr("data-st-target");
    
    var duration= $(this).attr("data-duration");
    console.log("名稱"+target);
    console.log("時間"+duration);
});