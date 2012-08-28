function(doc, req) {
	// !json templates.mustache
	// !json templates.view
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !code templates/mustache.js

	var navbar_contents = {
		"view": "active"
	};
	navbar = Mustache.render(templates.navbar, navbar_contents);

	var view = {
		"navbar": navbar,
		"header": templates.header,
		"scripts": templates.scripts
		  };

  	return Mustache.render(templates.view, view);
}
