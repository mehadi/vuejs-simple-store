<template>
    <div v-if="!loading" class="row" style="margin: 5px">
        <div v-for="(item,index) in items" :key="index" class="col-sm-4">
            <router-link :to="{path:'item/' +item.id}" tag="div">
                <div class="card">
                    <img :src="item.photo" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{item.title}}</h5>
                        <p class="card-text">{{item.price}}</p>

                    </div>
                </div>
            </router-link>
            <a @click="addToCart(item)" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    <h1 v-else>Loading......</h1>
</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                loading: true,
            }
        },
        computed: {
            items() {
                return this.$store.getters.getInventory
            }
        },
        mounted() {
            this.fetchInventiory()
        },
        methods: {
            addToCart(item) {
                this.$store.commit('addToCart', item)
            },
            fetchInventiory() {
                var self = this
                axios.get('http://localhost:3000/items').then(response => {
                    setTimeout(function () {
                        self.$store.commit('setInventory', response.data)
                        self.loading = false
                    }, 500)
                })
            }
        }
    }
</script>

<style>

</style>