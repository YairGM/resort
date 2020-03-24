	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2020-01-12',
			selectable: true,
			selectHelper: true,
			select: function(start, end) {
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
			},
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'suite',
					start: '2020-01-01'
				},
				{
					title: 'Family',
					start: '2020-01-07'
				},
				{
					id: 999,
					title: 'Delux',
					start: '2020-01-09T16:00:00'
				},
				{
					title: 'Clasica',
					start: '2020-01-16T16:00:00'
				},
				{
					title: 'Superior',
					start: '2020-01-11'
				},
				{
					title: 'Luxury',
					start: '2020-01-20T10:30:00'
				},
				{
					title: 'suite',
					start: '2020-01-25T12:00:00'
				},
				{
					title: 'PLuxury',
					start: '2020-01-27T14:30:00'
				},
				{
					title: 'suite',
					start: '2020-01-29T17:30:00'
				},
				{
					title: 'Delux',
					start: '2020-01-21T20:00:00'
				},
				{
					title: 'Clasica',
					start: '2020-01-13T07:00:00'
				}				
			]
		});
		
	});