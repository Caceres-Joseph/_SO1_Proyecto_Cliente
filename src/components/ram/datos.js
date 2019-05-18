export default function getDefaultData() {
    return {
        /*
        |------------------ 
        | get idInventario
        |------------------- 
        */
        txtIdInventario: null,

        statusProgress: 0,

        totalRam: 0,
        chartOptions: {
            chart: {
                title: 'Porcentaje de uso del cpu',
                subtitle: '--, --, --',
            },
            legend: {
                position: 'bottom'
            },
            height: 500,

            hAxis: {
                textPosition: 'none'
            },
            /* hAxis: { maxValue: 7 },
              
            lineWidth: 10 */
        },

        chartData: [
            ['% de uso', 'Uso de ram(MB) ']
        ],

        contador: 1,

        //la grafica circular

        interval: {},
        value: 0,

        //la ram
        percent: 0,


        //response

        item: {
            Total: 0,
            Libre: 0,
            Porcentaje: 0

        },

        item3: {
            Total: 0,
            Libre: 0,
            Porcentaje: 0

        },

        item2: {
            Total: 0,
            Libre: 0,
            Porcentaje: 0

        }

        ,
        bandera:true

    }
}