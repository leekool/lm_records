<script lang="ts">
    import "../app.css";
</script>

<div class="main">
    <div class="logo">
        <img src="/images/logo.png" alt="logo" />
    </div>
</div>

<slot />

<style>
    .main {
        display: flex;
        flex-direction: column;
        padding: 2em;
    }

    .logo {
        display: flex;
        align-self: center;
    }
</style>
