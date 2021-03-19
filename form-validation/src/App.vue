<template>
  <div id="app" class="container mb-5 mt-5" style="width: 500px">
    <form-validation></form-validation>
  </div>
</template>

<script>
import FormValidation from "./FormValidation";

export default {
  name: 'App',
 components:{
   formValidation : FormValidation
 }
}
</script>

<style>
</style>
