const elements = document.querySelectorAll('[data-bgs]');

Array.prototype.forEach.call(elements, function (element) {

    let size = element.hasAttribute("data-bgs-size") ? element.getAttribute("data-bgs-size") : "500";
    let color = element.hasAttribute("data-bgs-color") ? element.getAttribute("data-bgs-color") : "#4B8CEE";
    let opacity = element.hasAttribute("data-bgs-opacity") ? element.getAttribute("data-bgs-opacity") : ".1";
    let width = element.hasAttribute("data-bgs-width") ? element.getAttribute("data-bgs-width") : 80;
    let position = element.hasAttribute("data-bgs-position") ? element.getAttribute("data-bgs-position") : "center"
    let double = element.hasAttribute("data-bgs-double");
    let circle2 = "";
    
    let cx = size / 2;
    let cy = size / 2;
    let radio = (size - 2 * width) / 2;
    
    switch (position) {
        case "left":
            cx = 0;
            element.style.backgroundPosition = "left";
            break;
        case "right":
            cx = size;
            element.style.backgroundPosition = "right";
            break;
        default:
            element.style.backgroundPosition = "center";
            break
    }
    
    if (double) {
        circle2 = "<ellipse stroke='" + color + "' stroke-opacity='" + opacity
            + "' rx='" + radio / 2 + "' ry='" + radio / 2 + "' cx='" + cx + "' cy='" + cy
            + "'  fill-opacity='0' stroke-width='" + width + "'/>";
    }
    
    let circle = "<svg width='" + size + "' height='" + size + "' xmlns='http://www.w3.org/2000/svg'>"
        + "<ellipse stroke='" + color + "' stroke-opacity='" + opacity
        + "' rx='" + radio + "' ry='" + radio
        + "' cx='" + cx + "' cy='" + cy + "'  fill-opacity='0' stroke-width='" + width + "'/>"
        + circle2 + "</svg>";
    
    let circle64 = window.btoa(circle);
    element.style.backgroundImage = "url('data:image/svg+xml;base64," + circle64 + "')";
    element.style.backgroundRepeat = "no-repeat";

});



