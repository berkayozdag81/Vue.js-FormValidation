<template>
  <div class="card">
    <h3 class="card-header text-center">Kayıt Formu </h3>
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>First name : </label>
            <input type="text" class="form-control" v-model.trim="$v.firstname.$model"
                   :class="{'is-invalid' : $v.firstname.$error, 'is-valid':!$v.firstname.$invalid}">
            <div class="valid-feedback">Your firstname is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.firstname.required">Firstname is required</span>
              <span v-if="!$v.firstname.minLength">First name must have at least
                {{$v.firstname.$params.minLength.min}} letters</span>
              <span v-if="!$v.firstname.maxLength">First name must have at least
                {{$v.firstname.$params.maxLength.max}} letters</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Last name : </label>
            <input type="text" class="form-control" v-model.trim="$v.lastname.$model"
                   :class="{'is-invalid' : $v.lastname.$error, 'is-valid':!$v.lastname.$invalid}">
            <div class="valid-feedback">Your lastname is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.lastname.required">lastname is required</span>
              <span v-if="!$v.lastname.minLength">lastname name must have at least
                {{$v.lastname.$params.minLength.min}} letters</span>
              <span v-if="!$v.lastname.maxLength">lastname name must have at least
                {{$v.lastname.$params.maxLength.max}} letters</span>
            </div>
          </div>
          <div class="form-group">
            <label>Age : </label>
            <input type="number" class="form-control" v-model.number.lazy="$v.age.$model"
                   :class="{'is-invalid' : $v.age.$error, 'is-valid':!$v.age.$invalid}">
            <div class="valid-feedback">age is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.age.between">age must be between {{$v.age.$params.between.min}} and
                {{$v.age.$params.between.max}}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, between, maxLength } from 'vuelidate/lib/validators'

export default {
  name : 'Form Validation',
  data(){
    return {
      firstname : '',
      lastname : '',
      age : 0
    }
  },
  validations: {
    firstname : {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    lastname : {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    age :{
      between:between(15,40)
    }
  }
}

</script>

<style scoped>

</style>
