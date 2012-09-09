<script type="text/javascript">
function removeEntry(id, revision)
{
	var agree=confirm("Are you sure you want to delete?");
	if (agree)
	{
		$.ajax({
	    url: '/couchclothes/' + id + '?rev=' + revision,
	    type: 'DELETE',
		    success: function(result) {
		        window.location.replace("/couchclothes/_design/couchclothes/_list/view/sortbytime?reduce=false");
		    }
		});
	}
	else
	{

	}
}
</script>