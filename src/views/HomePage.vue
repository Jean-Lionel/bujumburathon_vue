<template>
    <div class="homeContainer">
        <div class="title">
            <div class="addMach">+</div>
            <div class="cateOne">
                <h2>Data Center: INGANZAMARUMPU</h2> 
            </div>
            <div class="cateTwo">control buttons</div>
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
        <div class="bottomContainer"></div>
        
    </div>
</template>

<script setup>
</script>

<style scoped>
.homeContainer{
    position: relative;
    width: 100vw;
    height: 100vh;
    margin-top: -60px;
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
    font-size: 50px;

}
.cateOne{
    width: 75%;
    height: 100%;
    background-color: yellow;
}
.cateTwo{
    width: 20%;
    height: 100%;
    background-color: yellow;
    align-content: center;
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
.bottomContainer{
    width: 100%;
    height: 15%;
    background-color: yellow;
}
</style>