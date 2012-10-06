function(doc) 
{
	if(doc.type == "shirt_polo")
	{
		emit(doc._id, doc);
	}
};
