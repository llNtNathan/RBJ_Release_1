<template>
    <v-app>
        <h1 class="headline white--text">Home</h1>
        <v-container fluid>
            <h1 class="headline text-xs-center white--text">
                Últimas noticias
            </h1>
            <v-layout >
                <v-flex xs12 sm12 md12>
                    <v-layout >
                        <gallery>

                        </gallery>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm12 md12>
                    <v-layout>
                        <gallery>

                        </gallery>
                    </v-layout>
                </v-flex>
            </v-layout>
    </v-container>
    </v-app>
</template>
<script>
import Gallery from './Gallery.vue'
export default {
    components:{
        Gallery
    }
}
</script>
