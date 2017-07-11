function jsonp(src,fn){
    var data;
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = function() {
        data = remoteData;
        document.body.removeChild(script);
        fn && fn(data);
    }
}
function loadJq(fn) {
    window.onload = function() {
        var script = document.createElement("script");
        script.src = "https://cccikov.github.io/cccgit/test/js/jquery-1.11.3.min.js"
        document.body.appendChild(script);
        // 加载好之后
        script.onload = function() {
            fn && fn();
        }
    }
}
loadJq(function() {
    $('<style type="text/css">#float {position: fixed;top: 35%;left: 0;z-index: 100000;padding: 12px;padding-right: 16px;background: green;color: #fff;text-align: center;border-top-right-radius: 100px;border-bottom-right-radius: 100px;transition: all 0.3s;}#float.active {padding-right: 12px;border-top-right-radius: 5px;border-bottom-right-radius: 5px;}#float a {color: inherit;text-decoration: inherit;}</style>').appendTo("body");
    var float = $('<div class="active" id="float"><a href="javascript:void(0)">充值</a></div>');
    float.appendTo("body");
    float.find("a").click(function(){
        jsonp("https://cccikov.github.io/remoteData/data.js?time="+(new Date().getTime()),function(result){
            console.log(result);
        });
    });
});
