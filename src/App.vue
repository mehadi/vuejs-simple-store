<template>
    <div id="app">

        <navbar @search="search"></navbar>

        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <router-view></router-view>
                    <!--<inventory @newItemAdded="addCartItem" :items="items"></inventory>-->
                </div>
                <div class="col-sm-3">
                    <cart @itemRemoved="removeItem" :items="cart"></cart>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

    import Navbar from "./components/Navbar";
/*    import Inventory from "./components/Inventory";*/
    import Cart from "./components/Cart";
    import data from "./data.json";

    export default {
        name: 'app',
        components: {
            Navbar,
            Cart
        },
        data() {
            return {
                items: [],
                cart: []
            }
        },
        mounted() {
            this.items = data
        },
        methods: {
            search(keyword) {
                this.items = data.filter(item => {
                    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                })
            },
            addCartItem(item) {
                this.cart.push(item)
            },
            removeItem(index) {
                this.cart.splice(index, 1)
            }
        }
    }
</script>

<style>
    .container {
        padding: 10px;
    }
</style>