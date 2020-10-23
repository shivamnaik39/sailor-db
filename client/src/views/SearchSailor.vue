<template>
  <div class="search-sailor">
    <h1 class="title">Search Sailor</h1>
    <div id="search-container">
      <form action="" id="search-sailor-form" @submit.prevent="onSubmit">
        <p id="my-name">SHIVAM NAIK</p>
      <div class="form-group">
        <label for="id">Sailor ID </label>
        <input type="text" id="id" pattern="^\d{4}$" required v-model="SID" />
      </div>
        <div class="form-group">
        <input type="submit" value="Search Sailor" class="btn" />
      </div>
    </form>

      <div>
        <h3 v-if="isSailor">Result Not Found...</h3>
      <div v-if="sailor">
        <h3>Result Found...</h3>
        <br>
      <Sailor :sailor='sailor'  />
      </div>
      </div>

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
      SID: null,
      sailor: null,
      isSailor: null
    }
  },

  methods: {
    async onSubmit () {
      try {
        this.sailor = null
        this.isSailor = null
        const sailors = await SailorService.getSailor(this.SID)

        if (sailors.length === 0) {
          this.isSailor = true
          return alert('Sailor doesn\'t exists...!')
        }
        this.sailor = sailors[0]
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style lang='scss'>
@import "../settings";
.search-sailor {
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  #search-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

  }

  #search-sailor-form{
    position: relative;
    #my-name{
    font-weight: bold;
    color:$accent-color;
    position: absolute;
    top:0.7rem;
    right:0.7rem;

  }
  }

  .title{
    margin-bottom: 1rem;
  }

  #search-sailor-form {
    background: $dark-color0;
    width: 400px;
    padding: 1rem;
    border-radius: 10px;

    .form-group {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 80px;
      align-items: flex-start;
      padding: 0.5em;

      input {
        border-radius: 8px;
        padding: 0.5rem 1rem;
        width: 80%;
        box-shadow: none;

        &:focus {
          background: lighten($accent-color, 15%);
        }
      }

      .btn {
        padding: 0.5rem 1rem;
        width: 50%;
        font-weight: bold;
        background: $accent-color;
        border: none;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: darken($accent-color, 10%);
        }
      }
    }
  }
}
</style>
