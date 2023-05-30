window.addEventListener('scroll', function(element) {
    const target = document.querySelectorAll('.scroll');
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth < 2160) {
        target.forEach(function(element) {
            var pos = window.pageYOffset-872;
            var rate = pos * 0.07;
            element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
            element.style.transform = 'scale(rate)';
        });

        const target2 = document.querySelectorAll('.project');
        target2.forEach(function(element) {
            var pos = window.pageYOffset-872;
            var rate = pos * -0.07;
            element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
        });

        const target3 = document.querySelectorAll('.work-experience-section');
        target3.forEach(function(element) {
            var pos = window.pageYOffset-2000;
            var rate = pos * -0.07;
            element.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
        }); 
    }
    else {
        target.forEach(function(element) {
            element.style.transform = 'translate3d(0px, 0px, 0px)';
        });

        const target2 = document.querySelectorAll('.project');
        target2.forEach(function(element) {
            element.style.transform = 'translate3d(0px, 0px, 0px)';
        });

        const target3 = document.querySelectorAll('.work-experience-section');
        target3.forEach(function(element) {
            element.style.transform = 'translate3d(0px, 0px, 0px)';
        });
    }
});