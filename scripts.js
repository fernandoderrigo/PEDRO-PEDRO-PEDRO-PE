document.addEventListener("DOMContentLoaded", function() {
    // Obtener elemento de audio
    var audio = document.getElementById("audioPlayer");

    // Ocultar la barra de controles de volumen del elemento de audio
    audio.controls = false;

    // Reproducir audio automáticamente al cargar la página
    audio.play().then(function() {
        console.log("El audio se ha reproducido automáticamente.");
    }).catch(function(error) {
        console.error("Error al reproducir el audio automáticamente:", error);
    });

    // Cambiar el fondo a blanco después de 41 segundos
    setTimeout(function() {
        document.body.style.backgroundColor = "#fff"; // Cambia el fondo a blanco

        // Cambiar entre blanco y negro cada 100 milisegundos (alternancia rápida)
        var interval = setInterval(function() {
            var currentColor = document.body.style.backgroundColor;
            if (currentColor === "rgb(255, 255, 255)") {
                document.body.style.backgroundColor = "#000"; // Cambia el fondo a negro
            } else {
                document.body.style.backgroundColor = "#fff"; // Cambia el fondo a blanco
            }
        }, 100); // Cambiado a 100 milisegundos para una alternancia más visible


        setTimeout(function() {
            clearInterval(interval); // Detiene el intervalo
            document.body.style.backgroundColor = "#000"; // Restaura el fondo a negro
        }, 50000); 

    }, 42000); 

    setTimeout(function() {
        // Función para crear y posicionar imágenes de forma aleatoria
        function createRandomImage() {
            // Crear elemento de imagen
            var img = document.createElement("img");
            img.src = "mapachito.gif"; // Ruta relativa al GIF 

            // Establecer estilos para la imagen
            img.style.position = "absolute"; // Posición absoluta
            img.style.width = "100px"; // Ancho fijo 
            img.style.left = Math.random() * window.innerWidth + "px"; // Posición horizontal aleatoria
            img.style.top = Math.random() * window.innerHeight + "px"; // Posición vertical aleatoria

            // Agregar la imagen al cuerpo del documento
            document.body.appendChild(img);

            // Eliminar la imagen después de cierto tiempo 
            setTimeout(function() {
                document.body.removeChild(img);
            }, 5000); 
        }

        // Mostrar imágenes aleatorias repetidamente cada cierto intervalo de tiempo
        var intervalImages = setInterval(createRandomImage, 250); 

        // Detener la creación de imágenes 
        setTimeout(function() {
            clearInterval(intervalImages); // Detener la repetición de imágenes
        }, 50000); 

    }, 41500); 
});
