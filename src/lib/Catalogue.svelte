<script lang="ts">
    interface Product {
        name: string;
        image: string;
    }

    const products: Product[] = [
        {
            name: "snooker shirt",
            image: "/images/snooker_shirt_front.png",
        },
        {
            name: "dividend shirt",
            image: "/images/dividend_shirt_front.png",
        },
    ];
</script>

<div class="main">
    {#each products as product}
        <div class="product">
            <img src={product.image} alt={product.name} />
        </div>
    {/each}
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        align-self: center;
        /* align-items: center; */
        width: 80%;
        height: 100%;
        border: 10px #8fecf3 solid;
    }

    .product {
        display: flex;
        justify-content: center;
        height: 50em;
        padding: 4em;
    }
</style>
