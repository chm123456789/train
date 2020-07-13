//清屏：清除dm中的弹幕内容
$('#clear').click(function () {
    $('#content').remove();
   
    window.location.reload();
});

// 创建弹幕
function createDm(text) {
    var dm = $("<div class='bullet'>" + text + "</div>");
    var fontColor = getRandomColor();
    var fontSize = Math.floor((Math.random() + 1) * 24) + "px";
    var right = $(".content").width() + "px";
    var top = Math.floor(Math.random() * 500) + "px";
    top = parseInt(top) > 500 ? "500px" : top;
    dm.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "right": right,
        "top": top,
        "white-space": 'nowrap'
    });
    $(".content").append(dm);
    $("#text").val("");
    return dm;
}

// Enter按钮监听
$("#text").on("keydown", function (event) {
    if (event.keyCode == 13) {
        // 创建弹幕
        var jqueryDom = createDm($("#text").val());
        // 添加定时器
        addInterval(jqueryDom);
    }
});


// 点击发送弹幕进行创建弹幕,并且为dm添加定时任务
$(".send").on("click", function () {
    // 创建弹幕m
    var dm = createDm($("#text").val());
    // 为弹幕添加定时任务
    addInterval(dm);
});

var isShow = true;// 开启弹幕和关闭弹幕的标识


//弹幕设置随机颜色
function getRandomColor() {
    return '#' + (function (h) {
        return new Array(7 - h.length).join("0") + h
    }
    )((Math.random() * 0x1000000 << 0).toString(16))
}

var timers = [];// 弹幕定时器

// 为弹幕添加定时任务
function addInterval(dm) {
    var i = 0;
    var speed = Math.floor(Math.random() * 6) + 1;
    var right = dm.offset().right - $(".content").offset().right;
    var timer = setInterval(function () {
        right--;
        dm.css("right", (i += speed) + "px");
        if (dm.offset().right + dm.width() < $(".content").offset().right) {
            dm.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}