<template>
<v-app>
    <v-layout
        row
        wrap>
 
        <v-flex
            xs12
            md6>
            <v-card-text>

                <v-card height="500">

                    <v-card-text>
                        <div class="text-xs-center"><span class=" headline">Uso del cpu % MV-1</span></div>


                    </v-card-text>
                    <v-card-text>
                        <div class="text-xs-center">
                            <v-progress-circular
                                :rotate="100"
                                :size="200"
                                :width="40"
                                :value="value"
                                color="primary">
                                {{ Math.round(value) }}%
                            </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>

            </v-card-text>
        </v-flex>


        <v-flex
            xs12
            md6>
            <v-card-title primary-title>

                <v-flex xs12>
                    <v-card>

                        <GChart
                            type="LineChart"
                            :data="chartData"
                            :options="chartOptions" />

                    </v-card>
                </v-flex>
            </v-card-title>
        </v-flex>
        <v-flex
            xs12
            md6>
            <v-card-text>

                <v-card height="500">

                    <v-card-text>
                        <div class="text-xs-center"><span class=" headline">Uso del cpu % MV-2</span></div>


                    </v-card-text>
                    <v-card-text>
                        <div class="text-xs-center">
                            <v-progress-circular
                                :rotate="100"
                                :size="200"
                                :width="40"
                                :value="value2"
                                color="primary">
                                {{ Math.round(value2) }}%
                            </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>

            </v-card-text>
        </v-flex>

        <v-flex
            xs12
            md6>
            <v-card-title primary-title>

                <v-flex xs12>
                    <v-card>

                        <GChart
                            type="LineChart"
                            :data="chartData2"
                            :options="chartOptions" />

                    </v-card>
                </v-flex>
            </v-card-title>
        </v-flex>


        <v-flex
            xs12
            md6>
            <v-card-text>

                <v-card height="500">

                    <v-card-text>
                        <div class="text-xs-center"><span class=" headline">Uso del cpu % MV-3</span></div>


                    </v-card-text>
                    <v-card-text>
                        <div class="text-xs-center">
                            <v-progress-circular
                                :rotate="100"
                                :size="200"
                                :width="40"
                                :value="value3"
                                color="primary">
                                {{ Math.round(value3) }}%
                            </v-progress-circular>
                        </div>
                    </v-card-text>
                </v-card>

            </v-card-text>
        </v-flex>

        <v-flex
            xs12
            md6>
            <v-card-title primary-title>

                <v-flex xs12>
                    <v-card>

                        <GChart
                            type="LineChart"
                            :data="chartData3"
                            :options="chartOptions" />

                    </v-card>
                </v-flex>
            </v-card-title>
        </v-flex>

    </v-layout>

</v-app>
</template>

<script src="./cpu.js">
</script>
