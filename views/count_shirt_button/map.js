function(doc) 
{
	if(doc.type == "shirt_button")
	{
		emit(doc._id, doc);
	}
};
