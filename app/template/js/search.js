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
		placeholder : 'Brand',
		single: true,  
		filter: true,
		onFilter: function(){
			brandlist.update();
		},
		onOpen: function() {
			brandlist.update();
		},
		onClick: function(view) {
		   $('#selClass, #selBody, #selYear,#selEngine, #selEnginevolume').multipleSelect('uncheckAll');
		   SwitchEnabledAppsearchFields();
		}
	});

	$('#selClass').multipleSelect({
		placeholder: 'Class & model',
		filter: true,
		onFilter: function(){
			classlist.update();
		},
		onOpen: function() {
			classlist.update();
		},
		onClick: function(view) {
		   $('#selBody, #selYear,#selEngine, #selEnginevolume').multipleSelect('uncheckAll');
		   SwitchEnabledAppsearchFields();
		}
	});

	$('#selBody').multipleSelect({
		placeholder: 'IMG & body',
		filter: true,
		onFilter: function(){
			bodylist.update();
		},
		onOpen: function() {
			bodylist.update();
		},
		onClick: function(view) {
		   $('#selYear,#selEngine, #selEnginevolume').multipleSelect('uncheckAll');
		   SwitchEnabledAppsearchFields();
		}
	});

	$('#selYear').multipleSelect({
		placeholder: 'Year',
		filter: true,
		onFilter: function(){
			yearlist.update();
		},
		onOpen: function() {
			yearlist.update();
		}
	});

	$('#selEngine').multipleSelect({
		placeholder: 'Engine No',
		filter: true,
		onFilter: function(){
			enginelist.update();
		},
		onOpen: function() {
			enginelist.update();
		}
	});  


	$('#selEnginevolume').multipleSelect({
		placeholder: 'Engine volume',
		filter: true,
		onFilter: function(){
			enginevolumelist.update();
		},
		onOpen: function() {
			enginevolumelist.update();
		}
	}); 


	$('#filterCat').multipleSelect({
		single: true,
		filter: true
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


function SwitchEnabledAppsearchFields(){
	$("#selClass, #selBody, #selYear, #selEngine, #selEnginevolume").not(':focus').multipleSelect("disable");
	if($('select#selBrand :selected').val()>0) {
		$("#selBody").not(':focus').multipleSelect("enable");
		$("#selClass").not(':focus').multipleSelect("enable");
	}
	if($('select#selClass :selected').val()>0) {
		$("#selBody, #selYear, #selEngine, #selEnginevolume").not(':focus').multipleSelect("enable");
	}
}
