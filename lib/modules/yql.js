exports.definition = {
   "name": "yql",
   "category": "Sources",
   "container": {
      "xtype": "WireIt.TextareaContainer",
      "icon": "/images/module_icons/yql.png",
      "title": "yql",
      "fields": [
	{ "type" : "text", "name": "query","wirable":true}
       ],
      "terminals": [
	{ "name" : "out", 
	"direction": [0,1],
	"offsetPosition": {"left":86,"bottom":-15},
	"ddConfig": {"type":"output","allowedTypes":["input"]},
        "wirable":true}
       ]
   }
};


exports.run = function(params, cb) {

        cb({"out": params.query});

};

