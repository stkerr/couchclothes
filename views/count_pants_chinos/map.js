function(doc) 
{
	if(doc.type == "pants_chinos")
	{
		emit(doc._id, doc);
	}
};
