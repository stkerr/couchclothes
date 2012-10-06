function(doc) 
{
	if(doc.type == "shirt_other")
	{
		emit(doc._id, doc);
	}
};
