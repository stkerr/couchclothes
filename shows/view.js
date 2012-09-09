function(doc, req) {
	// !json templates.mustache
	// !json templates.view
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !code templates/mustache.js


	/* Check to see if there is a count parameter */
	var count = 20;
	if(req.query != null && req.query.count != null && req.query.count != "")
	{
		count = req.query.count;
	}

	/* Fetch the results */
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = process;
	xhr.open("GET", "http://localhost:5984/couchclothes/_design/couchclothes/_view/sortbytime?reduce=false&endkey=0&limit=" + count, true);
	xhr.send();

	function process()
	{
	  if (xhr.readyState == 4) {
	    var resp = JSON.parse(xhr.responseText);

	    // resp now has the text and you can process it.
		alert(resp);
	  }
	}


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
