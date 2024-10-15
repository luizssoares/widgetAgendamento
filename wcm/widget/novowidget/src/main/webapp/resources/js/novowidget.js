jQuery(document).ready(function(){
    jQuery('.datetimepicker').datepicker({
        timepicker: true,
        language: 'pt-br',  // Alterado para suporte ao idioma português
        range: true,
        multipleDates: true,
        multipleDatesSeparator: " - "
    });
    jQuery("#add-event").submit(function(){
        alert("Evento Salvo");
        var values = {};
        $.each($('#add-event').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        console.log(values);
    });
});

(function () {    
    'use strict';
    // ------------------------------------------------------- //
    // Calendar
    // ------------------------------------------------------ //
    jQuery(function() {
        // page is ready
        jQuery('#calendar').fullCalendar({
            locale: 'pt-br',
            timeFormat: 'HH:mm',
            editable: true,
            eventLimit: false,
            displayEventTime: true,
            slotLabelFormat: 'HH:mm',
            allDayText: '24 horas',
            columnFormat: 'dddd',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            buttonText: {
                today: 'Hoje',
                month: 'Mês',
                week: 'Semana',
                day: 'Hoje',
                list: 'Lista'
            },
            events: [
                // seus eventos aqui
            ],
            themeSystem: 'bootstrap4',
            businessHours: false,
            defaultView: 'month',
            header: {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'today prev,next'
            },
            events: [
                // seus eventos aqui
            ],
            eventRender: function(event, element) {
                if(event.icon){
                    element.find(".fc-title").prepend("<i class='fa fa-"+event.icon+"'></i>");
                }
            },
            dayClick: function() {
                jQuery('#modal-view-event-add').modal();
            },
            eventClick: function(event, jsEvent, view) {
                jQuery('.event-icon').html("<i class='fa fa-"+event.icon+"'></i>");
                jQuery('.event-title').html(event.title);
                jQuery('.event-body').html(event.description);
                jQuery('.eventUrl').attr('href',event.url);
                jQuery('#modal-view-event').modal();
            },
            contentHeight: 1300
        })
    });

})(jQuery);
