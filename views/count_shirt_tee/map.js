function(doc) 
{
	if(doc.type == "shirt_tee")
	{
		emit(doc._id, doc);
	}
};
