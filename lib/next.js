(function() {
    if (document.querySelector('.actions2015-chat') !== null) {
        if (document.querySelector('.actions2015-chat').dataset.tooltip !== undefined) {
            location = '/messages'
        }
    }
    if (document.querySelector('.desc a')) {
        document.querySelector('.desc a').click()
    }
    if (document.querySelector('.right_click_img')) {
        if (document.querySelector('.right_click_img').src.split('cf').length === 1) {
            document.querySelector('.right_click_img').click();
            return
        }
    }
    if (document.querySelector('.userinfo2015-thumb img')) {
        document.querySelector('.userinfo2015-thumb img').click();
        return
    }
    if (document.querySelector('#photo_overlay_controls img')) {
        document.querySelector('#photo_overlay_controls img').click();
        return
    }
    if (location.pathname === '/messages' && location.search.split('readmsg').size() === 1) {
        window.scrollTo(0, document.body.scrollHeight);
        setInterval(function() {
            var a = document.getElementsByClassName("previewline");
            var b;
            for (var i = 0; i < a.length; i++) {
                if (a[i].textContent == "It's a match!") {
                    a[i].click();
                    break
                }
            };
            var unreplieds = document.getElementsByClassName('readMessage');
            if (unreplieds.length > 0) {
                unreplieds[0].children[0].children[1].click()
            }
            window.scrollTo(0, document.body.scrollHeight);
        }, 5000)
    }
})()
