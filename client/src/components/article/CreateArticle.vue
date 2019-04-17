<template>

  <v-form ref="form">

    <v-text-field v-model="formData.title"  label="title" required></v-text-field>

    <v-text-field v-model="formData.content" label="Content" required></v-text-field>

    <v-btn color="info" @click="formSubmit">Submit</v-btn>

  </v-form>

</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            formData:{},
            msg: '',
            valid: false
        }
    },
    method: {
        formSubmit() {
            axios.post(`http://localhost:3000/post`, this.formData)
                .then(res => this.msg = res.msg)
                .catch(err => console.log(err));
        }
    }
};

</script>

