    Bookmarklet.loadJS([
        "https://dl.dropboxusercontent.com/u/1084227/autoclick.js"
    ]);

var Bookmarklet = {
    injectExternalJS: function(href, type) {
        var scriptType = typeof(type) !== 'undefined' ? type : 'javascript';
        var jsScript = document.createElement('SCRIPT');
        jsScript.type = 'text/' + scriptType;
        jsScript.src = href;
        document.getElementsByTagName('head')[0].appendChild(jsScript);
    },
    loadJS: function(list) {
        var self = this;
        for (var i = 0; i < list.length; i++) {
            self.injectExternalJS(list[i]);
        }
    }
};
