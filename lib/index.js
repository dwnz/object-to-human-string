var toHumanString = function(value, level, options) {
	var opts = {
		separator: ', ',
		valueSeparator: '=',
		maxLevels: 1
	};

	if (typeof level === "object" && !options) {
		options = level;
		level = null;
	}

	if (options) {
		for (var o in options) {
			console.log("Mapping", o);
			opts[o] = options[o];
		}
	}

	if (!level) {
		level = 0;
	}

	console.log("Options is now", opts);

	var errorString = "";

	for (var item in value) {
		if (typeof value[item] === "object" && level < opts.maxLevels) {
			errorString += opts.separator + item + opts.valueSeparator + "[" + toHumanString(value[item], level + 1, opts) + ']';
		} else {
			errorString += opts.separator + item + opts.valueSeparator + value[item];
		}
	}

	return errorString.substring(opts.separator.length);

};

module.exports = toHumanString;