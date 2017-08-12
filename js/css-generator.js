
// Model
var model = {
	horz: 2,
	vert: 2,
	blur: 2,
	red: 0,
	green: 0,
	blue: 0,
	alpha: 0.6,
	hexValue: '#000000',
	codeValue: 'text-shadow:2px 2px 2px rgba(0, 0, 0, 0.6)'
};


// View
var view = {

	init: function() {
		// Hexcode Input
		this.hex = document.getElementById('input--hex');

		// Placeholder Text
		this.demoText = document.getElementById('demo-text');

		// Code Placeholder
		this.code = document.getElementById('your-code');

		// Directional Sliders
		this.sliderHorz = document.getElementById('slider--horz');
		this.sliderVert = document.getElementById('slider--vert');
		this.sliderBlur = document.getElementById('slider--blur');

		// Directional Outputs
		this.horzOutput = document.getElementById('horz');
		this.vertOutput = document.getElementById('vert');
		this.blurOutput = document.getElementById('blur');

		// Color Sliders
		this.sliderRed = document.getElementById('slider--red');
		this.sliderGreen = document.getElementById('slider--green');
		this.sliderBlue = document.getElementById('slider--blue');
		this.sliderAlpha = document.getElementById('slider--alpha');

		// Color Outputs
		this.redOutput = document.getElementById('red');
		this.greenOutput = document.getElementById('green');
		this.blueOutput = document.getElementById('blue');
		this.alphaOutput = document.getElementById('alpha');


		// Event Listeners
		this.hex.addEventListener('keyup', function(value){
			controller.hexToSlider(this.value);
		});
		this.sliderHorz.addEventListener('input', function(value){
			controller.updateHorz(this.value);
		});
		this.sliderVert.addEventListener('input', function(value){
			controller.updateVert(this.value);
		});
		this.sliderBlur.addEventListener('input', function(value){
			controller.updateBlur(this.value);
		});
		this.sliderRed.addEventListener('input', function(value){
			controller.updateRed(this.value);
		});
		this.sliderGreen.addEventListener('input', function(value){
			controller.updateGreen(this.value);
		});
		this.sliderBlue.addEventListener('input', function(value){
			controller.updateBlue(this.value);
		});
		this.sliderAlpha.addEventListener('input', function(value){
			controller.updateAlpha(this.value);
		});

		this.render();
	},


	render: function() {
		this.sliderRed.value = model.red;
		this.sliderGreen.value = model.green;
		this.sliderBlue.value = model.blue;
		this.sliderAlpha.value = model.alpha;

		this.redOutput.innerHTML = model.red;
		this.greenOutput.innerHTML = model.green;
		this.blueOutput.innerHTML = model.blue;
		this.alphaOutput.innerHTML = model.alpha;

		this.hex.value = model.hexValue;
		this.demoText.style = model.codeValue;
		this.code.value = model.codeValue;
	}
};


// Controller
var controller = {

	init: function() {
		view.init();
	},

	updateHorz: function(value){
		model.horz = value;
		controller.updateText();
	},
	updateVert: function(value){
		model.vert = value;
		controller.updateText();
	},
	updateBlur: function(value){
		model.blur = value;
		controller.updateText();
	},
	updateRed: function(value){
		model.red = value;
		controller.rgbToHex();
		controller.updateText();
	},
	updateGreen: function(value){
		model.green = value;
		controller.rgbToHex();
		controller.updateText();
	},
	updateBlue: function(value){
		model.blue = value;
		controller.rgbToHex();
		controller.updateText();
	},
	updateAlpha: function(value){
		model.alpha = value;
		controller.updateText();
	},
	// Updates the Textarea with the correct CSS code
	updateText: function() {
		model.codeValue = "text-shadow:" + model.horz + "px " + model.vert + "px " + model.blur + "px " + "rgba(" + model.red + ", " + model.green + ", " + model.blue + ", " + model.alpha + ")";
		view.render();
	},

	// Converts any RGB values into Hex values
	rgbToHex: function() {
		model.hexValue =  "#" + ((1 << 24) + (parseInt(model.red) << 16) + (parseInt(model.green) << 8) + parseInt(model.blue)).toString(16).slice(1);
	},

	hexToSlider: function(value){
		model.hexValue = value;

		// Example from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		value = value.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

		var number = result ? {r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16)} : null;

		if (number != null) {
			model.red = number['r'];
			model.green = number['g'];
			model.blue = number['b'];
			controller.updateText();
		}
	}
};

controller.init();



