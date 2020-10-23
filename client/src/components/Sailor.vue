<template>
  <div class="sailor">
    <p><span class="field">ID : </span> {{ sailor.SID }}</p>
    <p><span class="field">Name : </span> {{ sailor.SNAME }}</p>
    <p><span class="field">Raitings : </span> {{ sailor.RATING }}</p>
    <p><span class="field">Age : </span> {{ sailor.AGE }}</p>
  </div>
</template>

<script>
export default {
  props: ['sailor']
}
</script>

<style lang='scss'>
@import '../settings';

.sailor{

  background: $dark-color0;
  padding: 1rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width:250px;
  height: 150px;

  .field{
    color:$accent-color;
  }
}
</style>
