<template>
  <div id="app">
    <Carousel />
  </div>
</template>

<script>
import Carousel from './components/Carousel/Carousel.vue';

export default {
  name: 'app',
  components: {
    Carousel,
  },
};
</script>

<style>
.carousel {
  width: 550px;
  height: 240px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.arrow {
  margin: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid grey;
  border-radius: 20px;
  cursor: pointer;
}
.itemsList {
  display: flex;
}
.card {
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid grey;
}
.default{
  background-color: white;
}
.card.correct {
  background-color: lightgreen;
  justify-content: center;
}
.incorrect {
  background-color: pink;
}
.update{
  margin-top: -8px;
  margin-left: auto;
  margin-right: auto;
  flex-grow: 0.7;
  height: 30px;
  cursor: pointer;
}
.update.error{
  flex-grow: 0;
  margin-left: 20px; 
  margin-right: 0;
}
.popup-invitation{
  position: absolute;
  z-index: 1;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 400px;
  border: solid 3px #9dabc6;
  border-radius: 10px;
  box-shadow: 1px 10px 106px -15px rgba(0,0,0,0.75);
  background-color: white;
  color: #FBC02D;
  text-align: center;
  font-family: "Arial", sans-serif;
}
.popup-invitation .cross{
  position: absolute;
  top: -15px;
  right: -15px;
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #7291b0;
  color:white;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
}
.popup-invitation a img{
  width: 100px;
}
.popup-invitation a img:hover{
  filter: opacity(0.9);
}
</style>
