function(head, req) 
{
	// !json templates.mustache
	// !json templates.individualentry
	// !json templates.emptybody
	// !json templates.navbar
	// !json templates.scripts
	// !json templates.header
	// !json templates.removeentry
	// !code templates/mustache.js
	provides('html', function() {
	
		var count = 0;
		results = '<div class="container-fluid">';
		
		while(row = getRow())
		{
			if(count % 3 == 0)
			{
				if(count != 0)
					results += '</div></div>';

				results += '<div class="row-fluid"><div class="span12">';
			}

			if(row == null || row.value == null)
				continue;
			
			var data = {
					'type' : row.value.type,
					'color' : row.value.color,
					'brand' : row.value.brand,
					'link' : row.value.link,
					'notes' : row.value.notes,
					'fit' : row.value.fit,
					'documentname' : row.value.documentname,
					'documentrevision' : row.value.documentrevision,
					'attachmentname' : row.value.attachmentname
			};
			
			
			results += Mustache.render(templates.individualentry, data);
			
			count++;
		}
		 
		results += '</div></div>';
			
		results += '</div>';
	
		var navbar_contents = {
				"view": "active"
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

