$(document).ready(function(){
	$("#ss_type_id").multipleSelect({
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



	$('#selBrand').multipleSelect({
		single: true,  
		filter: true ,
		onFilter: function(){
			brandlist.update();
		},
		onOpen: function() {
			brandlist.update();
		}
	});

	$('#selClass').multipleSelect({
		filter: true,
		onFilter: function(){
			classlist.update();
		},
		onOpen: function() {
			classlist.update();
		}
	});

	$('#selBody').multipleSelect({
		filter: true,
		selectAll: false,
		onFilter: function(){
			bodylist.update();
		},
		onOpen: function() {
			bodylist.update();
		}
	});

	$('#selYear').multipleSelect({
		filter: true,
		onFilter: function(){
			yearlist.update();
		},
		onOpen: function() {
			yearlist.update();
		}
	});

	$('#selEngine').multipleSelect({
		filter: true,
		onFilter: function(){
			enginelist.update();
		},
		onOpen: function() {
			enginelist.update();
		}
	});  


	$('#selEnginevolume').multipleSelect({
		filter: true,
		onFilter: function(){
			enginevolumelist.update();
		},
		onOpen: function() {
			enginevolumelist.update();
		}
	}); 



typelist = new PerfectScrollbar('#productsizemenu .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
brandlist = new PerfectScrollbar('#brand_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
classlist = new PerfectScrollbar('#class_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
bodylist = new PerfectScrollbar('#body_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
yearlist = new PerfectScrollbar('#year_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
enginelist = new PerfectScrollbar('#engine_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
enginevolumelist = new PerfectScrollbar('#enginevolume_tab .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
})

