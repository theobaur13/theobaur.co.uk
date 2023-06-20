function debounce(func, delay) {
    var timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
}

function scroll_handler() {
    var elements = document.getElementsByClassName("scroll");
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;

        if (screenWidth < 2160 && screenWidth >= 800){
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var rect = element.getBoundingClientRect();
                var viewport_height = window.innerHeight || document.documentElement.clientHeight;
                const element_pos = rect.top + window.pageYOffset - (viewport_height / 4);

                var data_rate = element.getAttribute("data-rate");
                var scale_rate = element.getAttribute("scale-rate");
                var user_pos = window.pageYOffset;

                var distance = user_pos - element_pos;
                var distance_abs = Math.abs(distance);
                var transform = distance * data_rate * 0.07;
                var scale = 1 + (-distance_abs * scale_rate) * 0.0001; 

                element.style.transform = 'translate3d(0px, ' + transform + 'px, 0px) scale(' + scale + ')';
            }
        }
}

var debouncedScroll = debounce(scroll_handler, 4); 

window.addEventListener('scroll', debouncedScroll); 