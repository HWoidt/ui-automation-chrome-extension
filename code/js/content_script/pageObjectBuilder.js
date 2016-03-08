var port = chrome.runtime.connect({name: 'contentscript'});
var populatingPageObject = true;

$('body').on('click', function (event) {
    if (populatingPageObject) {
        var cssSelector = CSSGenerator(event.target);
        var xPathSelector = XPathGenerator(event.target);
        var element = {
            cssSelector: cssSelector,
            xPathSelector: xPathSelector,
            tagName: event.target.tagName.toLowerCase()
        };

        port.postMessage(element);
    }
});

chrome.runtime.onMessage.addListener(
    function (request) {
        populatingPageObject = request.action === 'start';
    });