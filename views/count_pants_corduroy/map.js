function(doc) 
{
	if(doc.type == "pants_corduroy")
	{
		emit(doc._id, doc);
	}
};
