<template>
    <div class="wrapper">
        <h2>HOW DO YOU FEEL RIGHT NOW?</h2>
        <div class="btns">
            <span class="anxious" @click="Healer('anx')">Anxious</span>
            <span class="disappointed" @click="Healer('dis')">Disappointed</span>
            <span class="lonely" @click="Healer('aln')">Lonely</span>
            <span class="depressed" @click="Healer('dep')">Depressed</span>
            <span class="bored" @click="Healer('brd')">Bored</span>
        </div>
        
    </div>
</template>

<script>


export default {
    methods: {
        Healer(selectedFeel){
            this.$store.commit({
                type: 'theMood',
                value: selectedFeel
            });
            this.$router.push('/feelings/feel');
        }
    }
}
</script>


<style scoped>
.btns {
    margin: auto;
    padding-top: 50px;
}
span {
    border-radius: 20px;
    padding: 10px;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    color: #fff;
}
.depressed {
    background-color: royalblue;
}
.depressed:hover,
.depressed:focus{
    background-color: rgb(97, 126, 211);
}
.lonely{
    background-color: slateblue;
}
.lonely:hover,
.lonely:focus{
    background-color: rgb(137, 126, 204);
}
.disappointed{
    background-color: slategrey;
}
.disappointed:hover,
.disappointed:focus{
    background-color: rgb(136, 140, 145);
}
.bored{
    background-color: tomato;
}
.bored:hover,
.bored:focus{
    background-color: rgb(253, 126, 104);
}
.anxious{
    background-color: rgb(113, 235, 144);
}
.anxious:hover,
.anxious:focus{
    background-color: rgb(150, 233, 171);
}
</style>