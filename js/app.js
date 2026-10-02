// ============================================
// EARTH LIVE
// INTERFACE
// ============================================

console.log("app.js iniciado");


// --------------------------------------------
// BOTÃO ZOOM +
// --------------------------------------------

const zoomIn =
    document.getElementById("zoomIn");

if (zoomIn) {

    zoomIn.addEventListener(
        "click",
        function () {

            earthZoomIn();

        }
    );

}


// --------------------------------------------
// BOTÃO ZOOM -
// --------------------------------------------

const zoomOut =
    document.getElementById("zoomOut");

if (zoomOut) {

    zoomOut.addEventListener(
        "click",
        function () {

            earthZoomOut();

        }
    );

}


// --------------------------------------------
// BOTÃO HOME
// --------------------------------------------

const home =
    document.getElementById("home");

if (home) {

    home.addEventListener(
        "click",
        function () {

            earthHome();

        }
    );

}


// --------------------------------------------
// CAMADAS
// --------------------------------------------

const layers =
    document.querySelectorAll(
        ".layer"
    );


layers.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            layers.forEach(
                function (item) {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const layer =
                button.dataset.layer;


            console.log(
                "Camada selecionada:",
                layer
            );

        }
    );

});