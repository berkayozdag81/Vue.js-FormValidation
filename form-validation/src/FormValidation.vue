<template>
  <div class="card">
    <h3 class="card-header text-center">Vue Form Oluşturma </h3>
    <div class="card-body">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Slider type : </label>
            <input type="text" class="form-control" v-model.trim="$v.sliderType.$model"
                   :class="{'is-invalid' : $v.sliderType.$error, 'is-valid':!$v.sliderType.$invalid}">
            <div class="valid-feedback">Slider type is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.sliderType.required">Slider type is required</span>
              <span v-if="!$v.sliderType.minLength">Slider type must have at least
                {{$v.sliderType.$params.minLength.min}} letters</span>
              <span v-if="!$v.sliderType.maxLength">Slider type must have at least
                {{$v.sliderType.$params.maxLength.max}} letters</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>createdDate : </label>
            <input type="text" class="form-control" v-model.trim="$v.createdDate.$model"
                   :class="{'is-invalid' : $v.createdDate.$error, 'is-valid':!$v.createdDate.$invalid}">
            <div class="valid-feedback">createdDate is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.createdDate.required">createdDate is required</span>
              <span v-if="!$v.createdDate.minLength">createdDate name must have at least
                {{$v.createdDate.$params.minLength.min}} letters</span>
              <span v-if="!$v.createdDate.maxLength">createdDate name must have at least
                {{$v.createdDate.$params.maxLength.max}} letters</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Project ID : </label>
            <input type="number" class="form-control" v-model.number.lazy="$v.projectID.$model"
                   :class="{'is-invalid' : $v.projectID.$error, 'is-valid':!$v.projectID.$invalid}">
            <div class="valid-feedback">projectID is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.projectID.between">projectID must be between {{$v.projectID.$params.between.min}} and
                {{$v.projectID.$params.between.max}}</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>description : </label>
            <input type="text" class="form-control" v-model.trim="$v.description.$model"
                   :class="{'is-invalid' : $v.description.$error, 'is-valid':!$v.description.$invalid}">
            <div class="valid-feedback">description is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.description.required">description is required</span>
              <span v-if="!$v.description.minLength">description name must have at least
                {{$v.description.$params.minLength.min}} letters</span>
              <span v-if="!$v.description.maxLength">description name must have at least
                {{$v.description.$params.maxLength.max}} letters</span>
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
      sliderType : '',
      projectID : 0,
      description : '',
      createdDate: ''
    }
  },
  validations: {
    sliderType : {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    description : {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    projectID :{
      between:between(15,40)
    },
    createdDate :{
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    }
  }
}

</script>

<style scoped>

</style>
