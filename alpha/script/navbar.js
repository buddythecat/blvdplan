var active = $("#home");
function slideBar(sec){
				$(active).animate(
					{width: 92},
					500, 
					'linear',
					function(){
						active.toggleClass('nav_closed nav_open');
					}
				);
				$(sec).animate(
					{width:468},
					500,
					'linear',
					function(){
						$(sec).toggleClass('nav_closed nav_open');
					}
				);
				active = $(sec);
			};