'use strict';

var initSequense = function initSequense(elements) {
    return [{
        elements: elements,
        properties: 'transition.fadeIn',
        options: {
            duration: 1000
        }
    }];
};

var index = 0;
var showWord = function showWord(callback) {
    var p = document.createElement('p');
    var text = texts[index];
    var length = text.length;
    var i = 0;
    var tid = null;
    // $('#container').append(p);
    document.getElementById('container').appendChild(p);
    tid = setInterval(function () {
        p.innerHTML += text.charAt(i);
        if (i++ === length) {
            clearInterval(tid);
            if (texts.length > ++index) {
                showWord(callback);
            } else {
                callback();
            }
        }
    }, 100);
};

var div;
var img;
var h5;
var i = 0;
var initPics = function initPics() {
    div = document.createElement('div');
    img = document.createElement('img');
    div.appendChild(img);
    h5 = document.createElement('h5');
    div.appendChild(h5);
    img.src = images[i].src;
    h5.innerHTML = images[i].text;
    document.getElementById('container').appendChild(div);
    showPics();
};

var showPics = function showPics() {
    $(div).velocity(images[i].properties.in, {
        duration: 1000
    });
    if (++i < images.length) {
        $(div).velocity(images[i].properties.out, {
            duration: 500,
            delay: 5000,
            complete: function complete() {
                // if (++i === images.length) {
                //     // end();
                //     return;
                // } else {
                img.src = images[i].src;
                h5.innerHTML = images[i].text;
                showPics();
                // }
            }
        });
    }
};

var is_weixn = function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
};

var start = function start() {
    setTimeout(function () {
        showWord(function () {
            setTimeout(function () {
                $('#container').empty();
                initPics();
            }, 3000);
        });
        snowflake();
        // audioAutoPlay('media');
    }, 2000);
};

// function audioAutoPlay(id){
//     var audio = document.getElementById(id);
//     audio.play();
//     document.addEventListener("WeixinJSBridgeReady", function () {
//             audio.play();
//     }, false);
// }

// (() => {
//  var audio = document.createElement( 'audio' ); 

//  audio.id = 'media';    
//  audio.src = mediaUrl;
//  audio.play();  
//  audio.addEventListener('play', function() {
//      var $this = this;       
//      (function loop() {
//         if (!$this.paused && !$this.ended) {      
//             setTimeout(loop, 1000 / 30); // drawing at 30fps
//         }
//     })();
// }, 0);
// $('#container').append( audio );
// if (is_weixn()) {

//     audioAutoPlay('audio');
//     // alert('wx');
//     wx.config({
//         debug: false,
//         appId: '',
//         timestamp: '', 
//         nonceStr: '',
//         signature: '',
//         jsApiList: []
//     });
//     wx.ready(function () {
//         audioAutoPlay('audio');
//         // setTimeout(() => {
//         //     let audio = document.getElementById('audio');
//         //     // alert('111');
//         //     // console.log(audio);
//         //     audio.src = '//music.163.com/outchain/player?type=2&id=3801865&auto=1&height=66';
//         //     audio.play();
//         //     start();
//         // }, 1000);

//     });
// } else {
window.onload = function () {
    return start();
};

// }
// })();

// function audioAutoPlay(id){
//     var audio = document.getElementById(id);

//     var play = function() {
//         document.removeEventListener("WeixinJSBridgeReady", play);
//         document.removeEventListener("YixinJSBridgeReady", play);

//         audio.play();
//         audio.pause();
//         // document.removeEventListener("touchstart", play, false);
//     };

//     audio.play();
//     audio.pause();

//     //weixin
//     document.addEventListener("WeixinJSBridgeReady", play, false);
//     //yixin
//     document.addEventListener('YixinJSBridgeReady', play, false);

//     // document.addEventListener("touchstart", play, false);
// }

function snowflake() {
    // 雪花容器
    var $flakeContainer = $('#snowflake');

    // 随机六张图
    function getImagesName() {
        return snowflakeURl[[Math.floor(Math.random() * 6)]];
    }
    // 创建一个雪花元素
    function createSnowBox() {
        var url = getImagesName();
        return $('<div class="snowbox" />').css({
            'width': 41,
            'height': 41,
            'position': 'absolute',
            'backgroundSize': 'cover',
            'zIndex': 100000,
            'top': '-41px',
            'backgroundImage': 'url(' + url + ')'
        }).addClass('snowRoll');
    }
    // 开始飘花
    setInterval(function () {
        var container = $("#container");
        var visualWidth = container.width();
        var visualHeight = container.height();
        // 运动的轨迹
        var startPositionLeft = Math.random() * visualWidth - 100,
            startOpacity = 1,
            endPositionTop = visualHeight - 40,
            endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
            duration = visualHeight * 10 + Math.random() * 5000;

        // 随机透明度，不小于0.5
        var randomStart = Math.random();
        randomStart = randomStart < 0.5 ? startOpacity : randomStart;

        // 创建一个雪花
        var $flake = createSnowBox();

        // 设计起点位置
        $flake.css({
            left: startPositionLeft,
            opacity: randomStart
        });

        // 加入到容器
        $flakeContainer.append($flake);

        // 开始执行动画
        $flake.transition({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.7
        }, duration, 'ease-out', function () {
            $(this).remove(); //结束后删除
        });
    }, 200);
}

// const end = () => {
//     $('#container').empty();
//     let p = document.createElement('p');
//     p.innerHTML = '我们已经在一起100天5小时23分钟183秒了'
//     $('#container').append(p);
// };
