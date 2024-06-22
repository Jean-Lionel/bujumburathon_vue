<template>
    <div class="homeContainer">
        <div class="title">
            <h2>Data Center: INGANZAMARUMPU</h2>
        </div>
        <div class="serContainer">
            <div class="servers">
                <div class="oneServer"></div>
            </div>
            <div class="serverDetail">
                
            </div>
        </div>
        
    </div>
</template>

<script setup>
</script>

<style scoped>
.homeContainer{
    width: 100vw;
    height: 100vh;
    background-color: red;
    overflow: hidden;
}
.serContainer{
    display: flex;
    width: 100%;
    height: 70%;
    background-color: green;
}
.servers{
    width: 80%;
    height: 70vh;
    background-color: blue;
}
.serverDetail{
    width: 20%;
    height: 70vh;
    background-color: yellow;
}
</style>