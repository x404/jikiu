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

typelist = new PerfectScrollbar('#productsizemenu .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});



	$('#selBrand').multipleSelect({
		single: true,  
		filter: true ,
		onOpen: function() {  
			// $('#brand_tab .ms-parent .ms-drop .ms-search input').focus();
			// $("#brand_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selClass').multipleSelect({
		filter: true ,
		onOpen: function() {  
			// $('#class_tab .ms-parent .ms-drop .ms-search input').focus();
			// $("#class_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selModel').multipleSelect({
		filter: true,
		selectAll: false,
		onOpen: function() {  
			// $('#model_tab .ms-parent .ms-drop .ms-search input').focus();
			// $("#model_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selEngine').multipleSelect({
		filter: true,
		onOpen: function() {
			// $("#engine_tab ul").getNiceScroll()[0].show().onResize();
		}  
	});  


	$('#selYear').multipleSelect({
		filter: true,
		onOpen: function() {
			// $("#year_tab ul").getNiceScroll()[0].show().onResize();
		}
	});

	$('#selBody').multipleSelect({
		filter: true ,
		onOpen: function() {
			// $("#body_tab ul").getNiceScroll()[0].show().onResize();
		}
	}); 



})

