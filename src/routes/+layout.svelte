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
    }

    .logo {
        display: flex;
        align-self: center;
    }
</style>
