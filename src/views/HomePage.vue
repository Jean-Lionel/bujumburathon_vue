<template>
    <div class="homeContainer">
        <div class="title">
            <div class="addMach">+</div>
            <div class="cateOne">
                <h2>Data Center: INGANZAMARUMPU</h2> 
            </div>
            <div class="cateTwo">4</div>
            <!-- <h2>Data Center: INGANZAMARUMPU</h2> -->
            <!-- <button>Eteindre la Machine</button> -->
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
.title{
    display: flex;
    width: 100%;
    height: 10%;
    /* background-color: green; */
}
.addMach{
    width: 5vw;
    height: 100%;
    background-color: red;
    align-content: center;
    font-size: 60px;

}
.cateOne{
    width: 75%;
    height: 100%;
    background-color: yellow;
}
.cateTwo{
    width: 20%;
    height: 100%;
    background-color: blue;
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