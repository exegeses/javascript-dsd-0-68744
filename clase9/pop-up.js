//const thumb = document.querySelector('#thumb');
const thumb = document.getElementById('thumb');
const url = 'ampliada.html';
const nombreVentana = 'popup';
const caracteristicas = 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=1080,height=1350'

thumb.addEventListener(
        'click',
        function()
        {
            window.open(
                url,
                nombreVentana,
                caracteristicas
                );
        }         
);