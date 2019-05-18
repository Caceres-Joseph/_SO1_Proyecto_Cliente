<template>
<v-app>
    <v-layout
        row
        wrap>
        <v-flex xs12>
            <v-layout
                row
                wrap>

                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title primary-title>
                                <v-layout
                                    row
                                    wrap>
 

                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" headline">Total de Memoria MV-1</span></div>
                                    </v-flex>
                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" display-1">{{item.Total}}</span><span class=" subheading" >MB</span></div>

                                    </v-flex>  
                                </v-layout>
                            </v-card-title>
                        </v-card>
                    </v-card-text>
                </v-flex>


                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title class="text-xs-center">
                                <div class="text-xs-center"><span class=" headline">Uso de RAM % MV -1</span></div>

                            </v-card-title>
                            <div class="text-xs-center">
                                <v-progress-circular
                                    :rotate="100"
                                    :size="100"
                                    :width="15"
                                    :value="item.Porcentaje"
                                    color="primary">
                                    {{ item.Porcentaje }}%
                                </v-progress-circular>
                            </div>

                        </v-card>

                    </v-card-text>
                </v-flex>
                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title primary-title>
                                <v-layout
                                    row
                                    wrap>
 

                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" headline">Total de Memoria MV-2</span></div>
                                    </v-flex>
                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" display-1">{{item2.Total}}</span><span class=" subheading" >MB</span></div>

                                    </v-flex>  
                                </v-layout>
                            </v-card-title>
                        </v-card>
                    </v-card-text>
                </v-flex>




                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title class="text-xs-center">
                                <div class="text-xs-center"><span class=" headline">Uso de RAM % MV-2</span></div>

                            </v-card-title>
                            <div class="text-xs-center">
                                <v-progress-circular
                                    :rotate="100"
                                    :size="100"
                                    :width="15"
                                    :value="item2.Porcentaje"
                                    color="primary">
                                    {{ item2.Porcentaje }}%
                                </v-progress-circular>
                            </div>

                        </v-card>

                    </v-card-text>
                </v-flex>
                


                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title primary-title>
                                <v-layout
                                    row
                                    wrap>
 

                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" headline">Total de Memoria MV-3</span></div>
                                    </v-flex>
                                    <v-flex xs12>

                                        <div class="text-xs-center"><span class=" display-1">{{item3.Total}}</span><span class=" subheading" >MB</span></div>

                                    </v-flex>  
                                </v-layout>
                            </v-card-title>
                        </v-card>
                    </v-card-text>
                </v-flex>




                <v-flex
                    xs12
                    md6>
                    <v-card-text>
                        <v-card height="200">
                            <v-card-title class="text-xs-center">
                                <div class="text-xs-center"><span class=" headline">Uso de RAM % MV-3</span></div>

                            </v-card-title>
                            <div class="text-xs-center">
                                <v-progress-circular
                                    :rotate="100"
                                    :size="100"
                                    :width="15"
                                    :value="item3.Porcentaje"
                                    color="primary">
                                    {{ item3.Porcentaje }}%
                                </v-progress-circular>
                            </div>

                        </v-card>

                    </v-card-text>
                </v-flex>
                

            </v-layout>
        </v-flex>
        <v-flex xs12>

            <v-divider></v-divider>

        </v-flex>
    </v-layout>

</v-app>
</template>

<script src="./ram.js">
</script>
