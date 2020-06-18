
// 创建弹幕
function createDm(text) {
    var dm = $("<div class='bullet'>" + text + "</div>");
    var fontColor = getRandomColor();
    var fontSize = Math.floor((Math.random() + 1) * 24) + "px";
    var left = $(".content").width() + "px";
    var top = Math.floor(Math.random() * 300) + "px";
    top = parseInt(top) > 450 ? "450px" : top;
    dm.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top,
        "white-space": 'nowrap'
    });
    $(".content").append(dm);
    return dm;
}
//清屏
  $('.clear').click(function() {
    $('.content').empty();
});
// 点击发送弹幕进行创建弹幕,并且为dm添加定时任务
$(".send").on("click", function () {
    // 创建弹幕m
    var dm = createDm($("#text").val());
  // 开启弹幕和关闭弹幕的标识

var isShow = true;

  // 为弹幕添加定时任务
  addInterval(dm);
});

//弹幕设置随机颜色
function getRandomColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    }
    )((Math.random() * 0x1000000 << 0).toString(16))
}
// 弹幕定时器
var timers = [];

// 为弹幕添加定时任务
function addInterval(dm) {
    var left = dm.offset().left - $(".content").offset().left;
    var timer = setInterval(function () {
        left--;
        dm.css("left", left + "px");
        if (dm.offset().left + dm.width() < $(".content").offset().left) {
            dm.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}