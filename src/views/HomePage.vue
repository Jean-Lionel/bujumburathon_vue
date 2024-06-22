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
                <div class="oneServer">vm one</div>
            </div>
            <div class="serverDetail">
                serverDetails
            </div>
        </div>
        <div class="bottomContainer">
            <div class="quest">
                new VM
            </div>
            <div class="nameVM">
                <input type="text" placeholder="Nom du VM"
                    style="padding: 10px; font-size: 20px; margin-right: 20px;">
                <input type="button" value="Créer"
                    style="padding: 10px; font-size: 20px; margin-right: 20px;">
            </div>
        </div>
        
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
.oneServer{
    width: 200px;
    height: 80px;
    background-color: white;
    align-content: center;
}
.serverDetail{
    width: 20%;
    height: 70vh;
    background-color: yellow;
    align-content: center;
}
.bottomContainer{
    display: flex;
    width: 100%;
    height: 15%;
    background-color: yellow;
}
.quest{
    width: 20%;
    height: 100%;
    background-color: white;
    align-content: center;
}
.nameVM{
    width: 80%;
    height: 100%;
    border: 1px dashed black;
    align-content: center;
}
</style>