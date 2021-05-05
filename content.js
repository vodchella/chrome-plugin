$(document).ready(function(){
    var li = $(document).find('html:eq(0)>body:eq(0)>div#invisible>ol:eq(0)>li:eq(0)')
    if (li.length) {
        li.html('Тут будет имя победителя')
    }
})
