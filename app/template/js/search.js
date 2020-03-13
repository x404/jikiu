$(document).ready(function(){
	$("#ss_type_id-3").multipleSelect({
		single: true,
		filter: true,
		placeholder : '',
		onFilter: function(){
			typelist.update();
		},
		onOpen: function() {
			typelist.update();
		},
		onClick: function(view) {
		}
	});

typelist = new PerfectScrollbar('#productsizemenu .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
})

