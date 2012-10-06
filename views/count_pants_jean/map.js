function(doc) 
{
	if(doc.type == "pants_jean")
	{
		emit(doc._id, doc);
	}
};
