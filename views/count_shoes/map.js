function(doc) 
{
	if(doc.type == "shoes")
	{
		emit(doc._id, doc);
	}
};
