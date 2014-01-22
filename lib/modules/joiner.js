

/**
 * Template using joiner
 */
exports.run = function(params, cb) {
	var error, result;
	try {
		var tag = params["tag"].toString();
		var first = "<"+tag+">";
		var last = "</"+tag+">";
		result = first+params["in"].toString()+last;
	} catch(ex) {
		error = ex;
	}
	if(error) {
		console.log(JSON.stringify(error));
		cb( {error: error.message} );
	}
	else {
		cb( {out: result} );
	}
	
};


exports.definition = {
    "name": "joiner",
    "category": "Templating",
    "container": {
        "icon": "/images/icons/script_edit.png",
        "xtype": "WireIt.FormContainer",
        "title": "joiner",
        "fields": [
            {"type": "string", "name": "num", "wirable": true }
        ],
        "terminals": [
            {"name": "in", "direction": [0, -1], "offsetPosition": [82, -15], "ddConfig": {
                "type": "input",
                "allowedTypes": ["output"]
            },
                "nMaxWires": 2
            },
            {"name": "out", "direction": [0, 1], "offsetPosition": {"left": 86, "bottom": -15}, "ddConfig": {
                "type": "output",
                "allowedTypes": ["input"]
            }
            }
        ]
    }
};

