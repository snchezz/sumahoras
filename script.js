$(document).ready(function(){
    // Inicializar el selector de hora de Materialize
    $('.timepicker').timepicker({
        twelveHour: false  // formato de 24 horas
    });

    $('#calculate-btn').click(function() {
        // Obtener la hora inicial
        const timePickerInstance = M.Timepicker.getInstance($('.timepicker')[0]);
        const initialTime = timePickerInstance.time.split(':');
        let hours = parseInt(initialTime[0]);
        let minutes = parseInt(initialTime[1]);

        // Obtener las horas y minutos a sumar
        const addTime = $('#add-time').val().split(':');
        const addHours = parseInt(addTime[0]);
        const addMinutes = parseInt(addTime[1]);

        // Sumar horas y minutos
        minutes += addMinutes;
        hours += addHours + Math.floor(minutes / 60);
        minutes = minutes % 60;

        // Formatear resultado
        const finalTime = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;

        // Mostrar el resultado
        M.toast({html: `Hora resultante: ${finalTime}`});
    });
});