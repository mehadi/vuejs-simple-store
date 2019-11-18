<template>
    <div v-if="item" class="row">
        <div class="col-sm-6">
            <img :src="item.photo" alt="Photo">
        </div>
        <div class="col-sm-6">
            <h4>
                {{item.title}}
            </h4>
            <p>
                {{item.description}}
            </p>
            <p>
                {{item.price}}
            </p>
            <a @click="addToCart(item)" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    <h3 v-else>Loading...</h3>
</template>

<script>

    import axios from 'axios'

    export default {
        data() {
            return {
                item: null
            }
        },
        mounted() {
            this.fetchItem()
        },
        methods: {
            fetchItem() {
                var self = this
                axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                    self.item = response.data
                })
            },
            addToCart(item) {
                this.$store.commit('addToCart', item)
            }
        }
    }
</script>

<style scoped>

</style>