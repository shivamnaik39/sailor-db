<template>
  <div class="all-sailors">
    <p id="my-name">SHIVAM NAIK</p>
     <button class="btn" @click="displaySailors">Display All Sailors</button>
    <h1 v-if="sailors.length>0">All Sailors</h1>

    <div class="sailors" v-if="sailors.length>0">
      <Sailor v-for="sailor in sailors" :sailor="sailor" :key="sailor.id" />
    </div>
  </div>
</template>

<script>
import Sailor from '../components/Sailor'
import SailorService from '../SailorService'
export default {
  components: {
    Sailor
  },
  data () {
    return {
      sailors: [],
      error: ''
    }
  },
  methods: {
    async displaySailors () {
      try {
        this.sailors = await SailorService.getSailors()
        console.log(this.sailors)
      } catch (error) {
        this.error = error
        console.log(error)
      }
    }
  }
}
</script>

<style lang='scss'>
@import "../settings";
.all-sailors {
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
  .sailors {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.8rem;
  }

  #my-name{
    font-weight: bold;
    color:$accent-color;
    position: absolute;
    top:3rem;
    right:3rem;

  }

  .btn {
        padding: 0.5rem 1rem;
        width: 200px;
        margin-bottom: 0.5rem;
        outline: none;
        font-weight: bold;
        background: $accent-color;
        border: none;
        border-radius:5px;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: darken($accent-color, 10%);
        }
      }
}
</style>
