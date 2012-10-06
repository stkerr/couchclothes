function(doc) 
{
	if(doc.type == "watch")
	{
		emit(doc._id, doc);
	}
};
