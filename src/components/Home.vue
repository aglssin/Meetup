<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex  xs12 sm6 class="text-xs-center text-lg-right">
                <v-btn class="blue lighten-1" large to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex class="text-xs-center text-lg-left" xs12 sm6>
                <v-btn class="blue lighten-1" large to="/meetups/new">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex class="text-xs-center">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="pink lighten-1"
                    v-if="onLoading"
                    indeterminate
                >
                </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout wrap row class="mt-3" v-if="!onLoading">
            <v-flex>
                <v-carousel>
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    reverse-transition="fade"
                    transition="fade"
                    style="cursor:pointer"
                    @click.native.stop="onLoadMeetup(meetup.id)"
                    >
                    <div class="title">
                        {{meetup.title}}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-1">
            <v-flex class="text-sm-center">
                <p>Welcome to Meetup.com</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed: {
        meetups (){
            return this.$store.getters.loadedMeetups
        },
        onLoading(){
            return this.$store.getters.loading
        }
    },
    methods: {
        onLoadMeetup (id){
         this.$router.push('/meetups/' +id)
        }
    }
}
</script>
<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        color: aliceblue;
        font-size: 2em;
        padding: 20px;
        left: 500px;
    }
    .mar{
        margin: 20px;
    }
</style>


