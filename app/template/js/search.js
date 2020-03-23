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
			document.querySelector('.area-controls').classList.remove('hide')
		}
	});



	$('#selBrand').multipleSelect({
		// placeholder : 'Brand',
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
		   switchPlaceholder();
		   SwitchEnabledAppsearchFields();
		}
	});

	$('#selClass').multipleSelect({
		// placeholder: 'Class & model',
		filter: true,
		onFilter: function(){
			classlist.update();
		},
		onOpen: function() {
			classlist.update();
		},
		onClick: function(view) {
		   $('#selBody, #selYear,#selEngine, #selEnginevolume').multipleSelect('uncheckAll');
		   switchPlaceholder();
		   SwitchEnabledAppsearchFields();
		},
		onCheckAll: function() {
		   SwitchEnabledAppsearchFields();
		},
		onUncheckAll: function() {
			$('#selBody, #selYear,#selEngine, #selEnginevolume').multipleSelect('uncheckAll');
			switchPlaceholder();
			 SwitchEnabledAppsearchFields();
		}
	});

	$('#selBody').multipleSelect({
		// placeholder: 'IMG & body',
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
		// placeholder: 'Year',
		filter: true,
		onFilter: function(){
			yearlist.update();
		},
		onOpen: function() {
			yearlist.update();
		}
	});

	$('#selEngine').multipleSelect({
		// placeholder: 'Engine No',
		filter: true,
		onFilter: function(){
			enginelist.update();
		},
		onOpen: function() {
			enginelist.update();
		}
	});  


	$('#selEnginevolume').multipleSelect({
		// placeholder: 'Engine volume',
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
		filter: true,
		onFilter: function(){
			filtercatlist.update();
		},
		onOpen: function() {
			filtercatlist.update();
		}
	}); 

if (document.querySelectorAll('#productsizemenu .listwrapper').length >= 1) {
typelist = new PerfectScrollbar('#productsizemenu .listwrapper', {
				wheelPropagation: true,
				minScrollbarLength: 100,
				maxScrollbarLength: 100,
			});
}

if (document.querySelectorAll('#brand_tab .listwrapper').length >= 1) {
	brandlist = new PerfectScrollbar('#brand_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
if (document.querySelectorAll('#class_tab .listwrapper').length >= 1) {
	classlist = new PerfectScrollbar('#class_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
if (document.querySelectorAll('#body_tab .listwrapper').length >= 1) {
	bodylist = new PerfectScrollbar('#body_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
if (document.querySelectorAll('#year_tab .listwrapper').length >= 1) {
	yearlist = new PerfectScrollbar('#year_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
if (document.querySelectorAll('#engine_tab .listwrapper').length >= 1) {
	enginelist = new PerfectScrollbar('#engine_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
if (document.querySelectorAll('#enginevolume_tab .listwrapper').length >= 1) {
	enginevolumelist = new PerfectScrollbar('#enginevolume_tab .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}

if (document.querySelectorAll('.filterCat .listwrapper').length >= 1) {
	filtercatlist = new PerfectScrollbar('.filterCat .listwrapper', {
					wheelPropagation: true,
					minScrollbarLength: 100,
					maxScrollbarLength: 100,
				});
}
})



function SwitchEnabledAppsearchFields(){
	$("#selClass, #selBody, #selYear, #selEngine, #selEnginevolume").not(':focus').multipleSelect("disable");
	if($('select#selBrand :selected').val()>0) {
		$("#selBody").not(':focus').multipleSelect("enable");
		$("#selClass").not(':focus').multipleSelect("enable");
		$('.placeholder-class, .placeholder-body').removeClass('disabled')
	}
	if($('select#selClass :selected').val()>0) {
		$("#selBody, #selYear, #selEngine, #selEnginevolume").not(':focus').multipleSelect("enable");
		switchPlaceholder('remove')
	}
}


function switchPlaceholder(action){
	if (action === 'remove'){
		$('.placeholder-year, .placeholder-engine, .placeholder-enginevolume').removeClass('disabled')		
	} else {
		$('.placeholder-year, .placeholder-engine, .placeholder-enginevolume').addClass('disabled')		
	}
}