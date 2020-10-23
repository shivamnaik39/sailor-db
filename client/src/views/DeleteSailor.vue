<template>
  <div class="delete-sailor">
    <h1 class="title">Delete Sailor</h1>
    <div id="delete-container">
      <form action="" id="delete-sailor-form" @submit.prevent="onSubmit">
        <p id="my-name">SHIVAM NAIK</p>
      <div class="form-group">
        <label for="id">Sailor ID </label>
        <input type="text" id="id" pattern="^\d{4}$" required v-model="SID" />
      </div>
        <div class="form-group">
        <input type="submit" value="Delete Sailor" class="btn" />
      </div>
    </form>

    <div id="delete">

        <h3 v-if="isSailor">Result Not Found...</h3>
        <br>

       <div v-if="sailor">
          <h3 >Result Found...</h3>
          <Sailor :sailor='sailor'/>
       <button class="delete-btn" @click="deleteSailor">Delete</button>
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
    },
    async deleteSailor () {
      try {
        if (confirm('Are you sure you want to delete this sailor record?')) {
          await SailorService.DeleteSailor(this.SID)
          this.sailor = null
          this.SID = null
          alert('Sailor record deleted successfully...')
        }
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style lang='scss'>
@import "../settings";
.delete-sailor {
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  #delete-sailor-form{
    position: relative;
    #my-name{
    font-weight: bold;
    color:$accent-color;
    position: absolute;
    top:0.7rem;
    right:0.7rem;

  }
  }

  #delete-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

    #delete{
      padding:0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 250px;
      background: $dark-color0;
      border-radius: 10px;

      .delete-btn{
      padding: 0.5rem 1rem;
        width: 50%;
        font-weight: bold;
        background: $error-color;
        border: none;
        outline: none;
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: darken($error-color, 10%);
        }
    }
    }

  }

  .title{
    margin-bottom: 1rem;
  }

  #delete-sailor-form {
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
