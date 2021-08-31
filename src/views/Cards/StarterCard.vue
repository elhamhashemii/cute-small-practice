<template>
    <div class="wrapper">
        <h3>Never Forget that</h3>
        <h2>You Deserve Happiness!</h2>
        <div class="main-pic">
            <img src="../../img/faces.jpg" alt="">
        </div>
        <router-link class= 'router-link-active' to="/feelings">Let's Start</router-link>
    </div>
</template>


<style>
.wrapper{
    margin: auto;
    width: 700px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
    font-family: cursive;
    /* Neomurphism stuffs */
    border-radius: 20px;
    background: #a3a3a3;
    box-shadow: inset -5px 5px 12px #8c8c8c,
                inset 5px -5px 12px #bababa; 
}
h2,h3{
    color: #060338;
    font-weight: bold;
    text-align: center;
    /* text-shadow: 1px 0px 9px #05003e; */
}
.router-link-active{
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 20px;
    color: #fff;
    padding: 15px;
    background-color: #030220bd;
    width: 20%;
    font-size: medium;
    transition-duration: 0.8s;
}
.router-link-active:hover{
    background-color: #030220fa;
}
.main-pic img{
    border-radius: 20px;
    box-shadow: 3px 3px 10px #060338;
    text-align: center;
    margin: 30px;
    cursor: pointer;
    transform: scale();
    transition-duration: 1s;
  transform: scale(1.0);
}
</style>