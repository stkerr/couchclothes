function(doc) 
{
	if(doc.type == "pants_other")
	{
		emit(doc._id, doc);
	}
};
