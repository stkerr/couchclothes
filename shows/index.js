function(doc, req) {
	// !json templates.mustache
	// !json templates.index
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !code templates/mustache.js

	var view = {
		"navbar": templates.navbar,
		"header": templates.header,
		"scripts": templates.scripts
		  };

  	return Mustache.render(templates.index, view);

//	return "Hello world 2!";
}
