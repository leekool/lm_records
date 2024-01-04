<script lang="ts">
    const products = [
        {
            name: "snooker shirt",
            image: "/images/snooker_shirt_front.png",
        },
        {
            name: "dividend shirt",
            image: "/images/dividend_shirt_front.png",
        }
    ]
</script>

<div class="main">
    {#each products as product}
        <div class="product">
            <img src={product.image} alt={product.name}>
        </div>
    {/each}
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        width: 80%;
        height: 100%;
        border: 10px #8fecf3 solid;
    }

    .product {

    }
</style>
