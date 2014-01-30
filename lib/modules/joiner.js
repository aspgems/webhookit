

/**
 * Template using joiner
 */
exports.run = function(params, cb) {
	var error, result;
	try {
        var input = params["in"];
        var tag = params["tag"].toString();
        var first = "<"+tag+">";
        var last = "</"+tag+">";
        result = "";
        for (var i=0; i< input.length;i++)
        {
            result = result+first+input[i].toString()+last;
        }
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
            {"type": "string", "name": "tag", "wirable": true }
        ],
        "terminals": [
            {"name": "in[]", "direction": [0, -1], "offsetPosition": [82, -15], "ddConfig": {
                "type": "input",
                "allowedTypes": ["output"]
            },
                "nMaxWires": 5
            },
            {"name": "out", "direction": [0, 1], "offsetPosition": {"left": 86, "bottom": -15}, "ddConfig": {
                "type": "output",
                "allowedTypes": ["input"]
            }
            }
        ]
    }
};

