<template>
  <div class="update-sailor">
    <h1 class="title">Update Sailor</h1>

    <div id="update-container">
      <form action="" id="update-sailor-form" @submit.prevent="onSubmit">
        <p id="my-name">SHIVAM NAIK</p>
      <div class="form-group">
        <label for="id">Sailor ID </label>
        <input type="text" id="id" pattern="^\d{4}$" required v-model="SID" />
      </div>
        <div class="form-group">
        <input type="submit" value="Update Sailor" class="btn" />
      </div>
    </form>
    <form action="" id="add-sailor-form" v-if="isUpdateForm" @submit.prevent="onUpdateSubmit">
      <p id="my-name">SHIVAM NAIK</p>
      <div class="form-group">
        <label for="id">Sailor ID </label>
        <input type="text" id="id" pattern="^\d{4}$" required v-model="sailor.SID" readonly />
      </div>
      <div class="form-group">
        <label for="name">Sailor Name </label>
        <input type="text" id="name" required pattern="^[A-Za-z ]{1,30}$" v-model="sailor.SNAME" />
      </div>
      <div class="form-group">
        <label for="raitings">Ratings </label>
        <input type="text" id="ratings" required pattern="0?[0-9]|10" v-model="sailor.RATING" />
      </div>
      <div class="form-group">
        <label for="age">Age </label>
        <input type="text" id="age" required pattern="^(1[89]|[2-9]\d|1[0-3]\d|140)$" v-model="sailor.AGE" />
      </div>
      <div class="form-group">
        <input type="submit" value="Update" class="btn" />
      </div>
    </form>
    </div>

  </div>
</template>

<script>
import SailorService from '../SailorService'
export default {
  data () {
    return {
      SID: null,
      sailor: {
        SID: null,
        SNAME: null,
        RATING: null,
        AGE: null
      },
      isUpdateForm: false
    }
  },

  methods: {
    async onSubmit () {
      try {
        this.sailor = null
        this.isSailor = null
        this.isUpdateForm = false
        const sailors = await SailorService.getSailor(this.SID)

        if (sailors.length === 0) {
          this.isSailor = true
          return alert('Sailor doesn\'t exists...!')
        }
        this.sailor = sailors[0]
        this.isUpdateForm = true
      } catch (error) {
        alert(error)
      }
    },
    async onUpdateSubmit () {
      try {
        if (confirm('Are you sure you want to update this sailor record?')) {
          await SailorService.UpdateSailor(this.SID, this.sailor)
          this.sailor = null
          this.SID = null
          this.isUpdateForm = false
          alert('Sailor record updated successfully...')
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
.update-sailor {
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  .title{
    margin-bottom: 1rem;
  }

  #update-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

  }

  #update-sailor-form, #add-sailor-form {
    background: $dark-color0;
    width: 400px;
    padding: 1rem;
    border-radius: 10px;
    position: relative;

    #my-name{
    font-weight: bold;
    color:$accent-color;
    position: absolute;
    top:0.7rem;
    right:0.7rem;

  }

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
