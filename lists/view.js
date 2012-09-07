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
		results = '<div class="container-fluid"><div class="row-fluid"><div class="span12">';
	
		while(row = getRow())
		{
			if(row == null || row.value == null)
				continue;
			
			var data = {
					'type' : row.value.type,
					'color' : row.value.color,
					'brand' : row.value.brand,
					'link' : row.value.link,
					'notes' : row.value.notes,
					'fit' : row.value.fit,
					'documentname' : row.value._id,
					'attachmentname' : row.value.attachmentname
			};
			
			
			results += Mustache.render(templates.individualentry, data);
			count++;
		}
		 
		results += '</div></div></div>';
	
		var navbar_contents = {
				"view": "active"
		};
		navbar = Mustache.render(templates.navbar, navbar_contents);
			
		var view = {
				"navbar": navbar,
				"header": templates.header,
				"scripts": templates.scripts,
				"body": results
				  };
		
		var final_results = Mustache.render(templates.emptybody, view);
		
		
	    send(final_results);
	});
};

