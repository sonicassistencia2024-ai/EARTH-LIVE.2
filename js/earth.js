// ============================================
// EARTH LIVE
// MOTOR DO GLOBO 3D
// ============================================

console.log("earth.js iniciado");

let earthViewer = null;


// --------------------------------------------
// INICIALIZAR GLOBO
// --------------------------------------------

function createEarth() {

    console.log("Criando globo...");

    if (typeof Cesium === "undefined") {

        console.error("Cesium não encontrado!");

        const status = document.getElementById("status");

        if (status) {
            status.textContent =
                "ERRO: Cesium não carregou";
        }

        return null;
    }


    const container =
        document.getElementById("cesiumContainer");


    if (!container) {

        console.error(
            "cesiumContainer não encontrado!"
        );

        return null;
    }


    // ----------------------------------------
    // CRIAÇÃO DO CESIUM
    // ----------------------------------------

    earthViewer = new Cesium.Viewer(
        "cesiumContainer",
        {

            animation: false,

            timeline: false,

            baseLayerPicker: false,

            geocoder: false,

            homeButton: false,

            sceneModePicker: false,

            navigationHelpButton: false,

            fullscreenButton: false,

            infoBox: false,

            selectionIndicator: false,

            sceneMode:
                Cesium.SceneMode.SCENE3D

        }
    );


    console.log(
        "Cesium Viewer criado!"
    );


    // ----------------------------------------
    // CÂMERA
    // ----------------------------------------

    earthViewer.camera.setView({

        destination:
            Cesium.Cartesian3.fromDegrees(

                -40,

                -10,

                7500000

            )

    });


    console.log(
        "Câmera posicionada!"
    );


    // ----------------------------------------
    // STATUS
    // ----------------------------------------

    const status =
        document.getElementById("status");


    if (status) {

        status.textContent =
            "EARTH LIVE — Globo online";

    }


    // ----------------------------------------
    // COORDENADAS DO MOUSE
    // ----------------------------------------

    const coordinates =
        document.getElementById(
            "coordinates"
        );


    if (coordinates) {

        const handler =
            new Cesium.ScreenSpaceEventHandler(
                earthViewer.scene.canvas
            );


        handler.setInputAction(

            function (movement) {

                const cartesian =
                    earthViewer.camera
                        .pickEllipsoid(
                            movement.endPosition
                        );


                if (!cartesian) {
                    return;
                }


                const cartographic =
                    Cesium.Cartographic
                        .fromCartesian(
                            cartesian
                        );


                const latitude =
                    Cesium.Math.toDegrees(
                        cartographic.latitude
                    );


                const longitude =
                    Cesium.Math.toDegrees(
                        cartographic.longitude
                    );


                coordinates.textContent =
                    "LAT: " +
                    latitude.toFixed(4) +
                    " | LON: " +
                    longitude.toFixed(4);

            },

            Cesium.ScreenSpaceEventType.MOUSE_MOVE

        );

    }


    return earthViewer;
}


// --------------------------------------------
// ZOOM
// --------------------------------------------

function earthZoomIn() {

    if (!earthViewer) {
        return;
    }

    earthViewer.camera.zoomIn(
        1000000
    );
}


function earthZoomOut() {

    if (!earthViewer) {
        return;
    }

    earthViewer.camera.zoomOut(
        1000000
    );
}


// --------------------------------------------
// VOLTAR PARA A TERRA
// --------------------------------------------

function earthHome() {

    if (!earthViewer) {
        return;
    }


    earthViewer.camera.flyTo({

        destination:
            Cesium.Cartesian3.fromDegrees(

                -40,

                -10,

                7500000

            ),

        duration: 1.5

    });

}


// --------------------------------------------
// INICIAR
// --------------------------------------------

createEarth();