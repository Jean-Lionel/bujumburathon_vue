
<template>
    <div>
        <input type="text" v-model="fileName">
        <textarea v-model="text" @keyup.enter="executerQuery"></textarea>

     

        <button @click="handleClick">Excuter</button>
    </div>
</template>

<script>
//import axios from 'axios';
    export default {
        data(){
            return {
                fileName : "",
                text : "",
                url : "http://127.0.0.1:8080/api"
            }
        },
        methods:{
            handleClick(){

                alert(this.fileName + " " + this.text);
               //axios.put(this.url, {fileName : this.fileName, text : this.text});
            }, 
            executerQuery(){
                alert(this.fileName + " " + this.text);
                //axios.put(this.url, {fileName : this.fileName, text : this.text});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>