$(document).ready(function(){
	$("#sidebar").add("<ul></ul>");
	var theSide = new sideNav({});
	$.ajax({
		type:'GET',
		url:'data/data.xml',
		datatype:'xml',
		success:function(xml){
			$("#sidebar").append('ul');
			$("#sidebar ul").attr('id')="navList";
			$(xml).find('item').each(function(){
				var anItem = $('li');
				anItem.attr('id')=$(this).attr('index');
				anItem.append("<a id=\""+$(this).attr('name')+"\" href=\""+$(this).attr('href')+"\">"+$(this).find('value').text()+"</a>");
				anItem.appendTo("#navList");
			});
		}
	});
})
