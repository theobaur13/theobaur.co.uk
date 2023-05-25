window.addEventListener('scroll', function(element) {
    const target = document.querySelectorAll('.scroll');
    target.forEach(function(element) {
        var pos = window.pageYOffset-590;
        var rate = pos * 0.07;
        element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
        element.style.transform = 'scale(rate)';
    });

    const target2 = document.querySelectorAll('.project');
    target2.forEach(function(element) {
        var pos = window.pageYOffset-560;
        var rate = pos * -0.07;
        element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    });

    const target3 = document.querySelectorAll('.work-experience');
    target3.forEach(function(element) {
        var pos = window.pageYOffset-650;
        var rate = pos * -0.07;
        element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    });
});