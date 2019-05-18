import getDefaultData from "./datos.js";
export default {
    /*
    |--------------------------------------------------------------------------
    | Data
    |--------------------------------------------------------------------------
    */

    data: getDefaultData,

    destroyed() {
        this.bandera = true;
    },
    created() {
        this.inicializar();

    },
    /*
    |--------------------------------------------------------------------------
    | Metodos
    |--------------------------------------------------------------------------
    */

    methods: {
        inicializar() {


            this.bandera = false;
            this.actualizarCpu();


        },



        actualizarCpu() {
            //console.log("Actualizando");

            if (this.bandera)
                return;

            setTimeout(() => {
                this.clckAceptar();
                setTimeout(() => {

                    this.clckAceptar2();
                    setTimeout(() => {

                        this.clckAceptar3();
                        this.actualizarCpu();
                    }, 500);
                }, 500);
            }, 2000);

            /* 
            setTimeout(() => {
                this.clckAceptar();
                this.clckAceptar2();
                this.clckAceptar3();
                this.actualizarCpu();
            }, 3000); 
            */


        },

        /* 
        |--------------------------------------------------------------------------
        | CLICK
        |--------------------------------------------------------------------------
        */


        clckAceptar() {

            let uri = "http://35.185.119.34:8082/totalCpu";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto(response.data.Porcentaje);

                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },

        clckAceptar2() {

            let uri = "http://34.74.101.11:8082/totalCpu";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto2(response.data.Porcentaje);

                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },

        clckAceptar3() {

            let uri = "http://34.74.196.25:8082/totalCpu";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto3(response.data.Porcentaje);

                })
                .catch((e) => {
                    this.println("falló");
                    //this.$log.info("FAILURE!!");
                });
        },


        /* 
        |--------------------------------------------------------------------------
        | PRINT
        |--------------------------------------------------------------------------
        */
        println(mensaje) {

            /* eslint-disable no-console */
            console.log(mensaje);
            /* eslint-enable no-console */
        },
        /* 
        |--------------------------------------------------------------------------
        | FUNCIONES
        |--------------------------------------------------------------------------
        */

        insertarNuevoPunto(ejeY) {
            this.value = ejeY;
            var nuevoPunto = [this.contador, Math.round(ejeY)];
            this.chartData.push(nuevoPunto);
            this.contador++;
        },

        insertarNuevoPunto2(ejeY) {
            this.value2 = ejeY;
            var nuevoPunto = [this.contador2, Math.round(ejeY)];
            this.chartData2.push(nuevoPunto);
            this.contador2++;
        },

        insertarNuevoPunto3(ejeY) {
            this.value3 = ejeY;
            var nuevoPunto = [this.contador3, Math.round(ejeY)];
            this.chartData3.push(nuevoPunto);
            this.contador3++;
        },
    }
};