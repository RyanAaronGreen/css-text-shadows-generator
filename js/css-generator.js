
// Text Shadow Default Attributes
var horz = 2;
var vert = 2;
var blur = 2;

var red = 0;
var green = 0;
var blue = 0;
var alpha = 0.6;

// Updates the Textarea with the correct CSS code
function updateText(horz, vert, blur, red, green, blue, alpha) {
    document.getElementById('demo-text').style.textShadow = horz + "px " + vert + "px " + blur+ "px rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";

    // Check if variable is 0, cause if it is, we don't really need the 'px'
    horz = (horz == 0 ? horz + " " : horz + "px ");
    vert = (vert == 0 ? vert + " " : vert + "px ");
    blur = (blur == 0 ? blur + " " : blur + "px ");

    document.getElementById('your-code').value = 'text-shadow="' + horz + vert + blur + "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
}

// Converts any RGB values into Hex values
function rgbToHex(r, g, b) {
    document.getElementById('input--hex').value =  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Updates the initial colors if user enters Hexcode into input
function updateColors(r, g, b) {
    document.getElementById('slider--red').value = r;
    document.getElementById('slider--green').value = g;
    document.getElementById('slider--blue').value = b;
    red = r;
    green = g;
    blue = b;
    updateText( horz, vert, blur, r, g, b, alpha);
}

// Converts the Hexcode into usable RGB code
function hexToRgb(hex) {
    // Example from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var number = result ? {r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16)} : null;

    if (number != null) {
        updateColors(number['r'],  number['g'],  number['b']);
    }
}


// Slider logic & functionality
function outputUpdate(element, slider) {
    var output =  element.getAttribute('data-output');
    document.querySelector('#' + output).value = slider;

    switch (output) {
        case 'horz':
            horz = slider;
            break;
        case 'vert':
            vert = slider;
            break ;
        case 'blur':
            blur = slider;
            break;
        case 'red':
            red = slider;
            break;
        case 'green':
            green = slider;
            break;
        case 'blue':
            blue = slider;
            break;
        default:
            alpha = slider;
    }

    updateText(horz, vert, blur, red, green, blue, alpha);
    red = parseInt(red);
    blue = parseInt(blue);
    green = parseInt(green);


    rgbToHex(red, green, blue);
}




