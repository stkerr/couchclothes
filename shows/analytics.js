function(doc, req) {
	// !json templates.mustache
	// !json templates.analytics
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !code templates/mustache.js

	var navbar_contents = {
		"analytics": "active"
	};
	navbar = Mustache.render(templates.navbar, navbar_contents);

	{{tableheader}}
    {{tablecdata}
    
	var view = {
		"navbar": navbar,
		"header": templates.header,
		"scripts": templates.scripts
		  };

  	return Mustache.render(templates.analytics, view);
}
