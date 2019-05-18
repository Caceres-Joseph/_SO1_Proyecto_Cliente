export default function getDefaultData() {
    return { 
        /*
        |------------------ 
        | get idInventario
        |------------------- 
        */
        txtIdInventario: null,

        statusProgress: 0,

        chartOptions: {
            chart: {
                title: 'Porcentaje de uso del cpu',
                subtitle: '--, --, --',
            }, 
            legend: { position: 'bottom' }
            , height: 500,
            vAxis: {
                maxValue: 100,
                minValue: 0
            },
            hAxis: { textPosition: 'none' },
            /* hAxis: { maxValue: 7 },
              
            lineWidth: 10 */
        },

        chartData: [
            ['% de uso', 'Uso del cpu(%) MV-1 ' ], 
        ],

        chartData2: [
            ['% de uso', 'Uso del cpu(%) MV-2 ' ], 
        ],
        chartData3: [
            ['% de uso', 'Uso del cpu(%) MV-3' ], 
        ],

        contador: 1, 
        contador2: 1, 
        contador3: 1, 

        //la grafica circular

        interval: {},
        value: 0, 
        value2: 0, 
        value3: 0, 
 
        bandera:true
    }
}