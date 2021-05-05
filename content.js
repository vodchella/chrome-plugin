const newValue = 'Тут будет имя победителя';

var html = $(document).find('html:eq(0)')
html.bind('DOMSubtreeModified', function(e) {
    if (e.target.innerHTML.length > 0) {
        var li = html.find('body:eq(0)>div#invisible>ol:eq(0)>li:eq(0)')
        if (li.length && li.html() !== newValue) {
            html.bind('DOMSubtreeModified', function(e1) {});
            li.html(newValue)
        }
    }
});
