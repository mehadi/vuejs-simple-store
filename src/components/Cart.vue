<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
        <hr>
        <li v-for="(item,index) in items" :key="index" class="list-group-item">
            <span @click="removeItem(index)" class="btn btn-sm btn-danger">-</span>
            <span class="item-name">{{item.title}}</span>
            <span class="item-price float-right">{{item.price}}</span>
        </li>
        <hr>
        <li class="list-group-item">
            <span class="item-name">Total</span>
            <span class="item-price float-right">${{totalPrice}}</span>
        </li>
        <li v-if="items.length>0" class="list-group-item">
            <button @click="checkout" class="btn btn-success">Checkout</button>
        </li>


    </ul>
</template>

<script>

    export default {
        computed: {
            items() {
                return this.$store.getters.getCart
            },
            totalPrice() {
                var total = 0
                this.items.forEach(item => {
                    total += parseFloat(item.price)
                })
                return total.toFixed(2)
            }
        },
        methods: {
            removeItem(index) {
                this.$store.commit('removeItem', index)
            },
            checkout() {
                if (confirm('Are you sure?')) {
                    this.$store.commit('clearCart')
                }
            }
        }
    }
</script>

<style>

</style>