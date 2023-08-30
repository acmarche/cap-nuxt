<template>
  <div id="openBlock">
    <div class="innerThing"><span>Ouvert</span> <span>en ce moment</span></div>
  </div>
</template>
<style>
#openBlock, .actionCircle {
  width: 140px;
  height: 140px;
  display: block;

  -webkit-border-radius: 70px;
  -moz-border-radius: 70px;
  border-radius: 70px;

  background-color: rgba(208, 225, 168, 0.5);
  position: absolute;
  right: 0;
  left: 0;
  top: -70px;
  z-index: 40;
  margin: auto;
}

#openBlock .innerThing, .actionCircle .innerThing {
  width: 118px;
  height: 118px;
  position: absolute;
  left: 11px;
  top: 11px;
  bottom: 11px;
  right: 11px;
  background-color: rgb(255, 255, 255);

  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  text-align: center;

  border: 1px dashed #93ae57;
}

.innerThing span {
  color: #93ae57;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 29px;
  display: block;
  margin-bottom: 3px;
}

.innerThing span:first-child {
  margin-top: 33px;
}

.innerThing span + span {
  text-transform: none;
  font-size: 16px;
}
</style>