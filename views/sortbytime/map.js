function(doc) 
{
	jsonConcat = function(o1, o2) {
		 for (var key in o2) {
		  o1[key] = o2[key];
		 }
		 return o1;
		}
	
	finaldoc = {};
	
	if(doc.created_at)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'created_at': doc.created_at } ); 
	}
	
	if(doc.type)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'type': doc.type } ); 
	}

	if(doc.color)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'color': doc.color } ); 
	}
	
	if(doc.brand)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'brand': doc.brand } ); 
	}
	
	if(doc.link)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'link': doc.link } ); 
	}
	
	if(doc.notes)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'notes': doc.notes } ); 
	}
	
	if(doc.fit)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'fit': doc.fit } ); 
	}
	
	if(doc.attachmentname)
	{ 
		finaldoc = jsonConcat( finaldoc, { 'attachmentname': doc.attachmentname } ); 
	}
	
	finaldoc = jsonConcat( finaldoc, { 'documentname': doc._id} ); 
	
	emit(doc._id, finaldoc);
};
