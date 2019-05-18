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
    mounted() {
        

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

            if (this.bandera)
                return;    
            //console.log("Actualizando");
            setTimeout(() => {
                this.clckAceptar();
                this.clckAceptar2();
                this.clckAceptar3();
                this.actualizarCpu();
            }, 2000);
        },

        /* 
        |--------------------------------------------------------------------------
        | CLICK
        |--------------------------------------------------------------------------
        */


        clckAceptar() {

            let uri = "http://35.185.119.34:8082/totalRam";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto(response.data);
                    this.item = response.data;

                })
                .catch((e) => {
                    this.println("falló");
                    this.println(e);
                    //this.$log.info("FAILURE!!");
                });
        },

        clckAceptar2() {

            let uri = "http://34.74.101.11:8082/totalRam";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto(response.data);
                    this.item2 = response.data;

                })
                .catch((e) => {
                    this.println("falló");
                    this.println(e);
                    //this.$log.info("FAILURE!!");
                });
        },

        clckAceptar3() {

            let uri = "http://34.74.196.25:8082/totalRam";

            this.axios
                .get(uri)
                .then((response) => {
                    this.insertarNuevoPunto(response.data);
                    this.item3 = response.data;

                })
                .catch((e) => {
                    this.println("falló");
                    this.println(e);
                    //this.$log.info("FAILURE!!");
                });
        },

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

            this.totalRam = Math.round(ejeY.totalMemMb);
            this.value = Math.round(ejeY.freeMemMb);
            this.percent = Math.round(100 - ejeY.freeMemPercentage);

            var nuevoPunto = [this.contador, this.totalRam - this.value];
            this.chartData.push(nuevoPunto);
            this.contador++;


            /* if (this.chartData.length>20) {
                this.chartData.splice(this.contador-19, 1);
            }   */
        }
    }
};