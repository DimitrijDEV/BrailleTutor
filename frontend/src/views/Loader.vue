<template>
  <div class="loader">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  height: auto;
  position: fixed;
  top: 350px;
  left: 0;
  z-index: 1;

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid white;
      border-color: white transparent white transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
