var ads = document.getElementsByClassName('ads');
if (ads.length > 0) {
    for (var elem = undefined; elem = ads[0];) {
        elem.parentNode.removeChild(elem);
    }
}
