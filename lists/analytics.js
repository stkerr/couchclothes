function(head, req) 
{
	// !json templates.mustache
	// !json templates.individualentry
	// !json templates.emptybody
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !code templates/mustache.js
	provides('html', function() {
	
		var count = 0;
		results = '<table>';
		
		while(row = getRow())
		{
			results += "<tr>";

			results += "<td>" + row.key + "</td>";
			results += "<td>" + row.value + "</td>";

			results += "</td></tr>";
		}
		 
		results += '</table>';
	
		var navbar_contents = {
				"analytics": "active"
		};
		navbar = Mustache.render(templates.navbar, navbar_contents);
			
		var view = {
				"navbar": navbar,
				"header": templates.header,
				"scripts": templates.scripts,
				"extrascripts": templates.removeentry,
				"body": results
				  };
		
		var final_results = Mustache.render(templates.emptybody, view);
		
		
	    send(final_results);
	});
};

