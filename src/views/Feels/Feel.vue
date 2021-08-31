<template>
    <div class="wrapper">
        <h1>I just wanna try to make u feel better :)</h1>
        <h3>{{ feeling  }}</h3>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    methods: {
    
    },
    computed: {
        ...mapState([
            'feeling',
            'anxMsg',
            'disMsg',
            'alnMsg',
            'depMsg',
            'brdMsg'
        ])
    },
}
</script>

<style scoped>
h1{
    color: white;
    padding: 10px;
    margin: 20px;
    text-align: center;
}
</style>