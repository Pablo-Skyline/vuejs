<template>
    <div>
        <h4 class="text-center mt-20">
            <small>
                <button class="btn btn-success" v-on:click="navigate()"> Mostrar todos los usuarios </button>
            </small>
        </h4>
        <div class="col-md-12 form-wrapper">
            <h2> Editar usuario </h2>
            <form id="create-post-form" @submit.prevent="editUser">
                <div class="form-group col-md-12">
                    <label for="title"> Nombre </label>
                    <input type="text" id="name" v-model="customer.first_name" name="title" class="form-control" placeholder="Enter firstname">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Correo </label>
                    <input type="text" id="email" v-model="customer.email" name="title" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Telefono </label>
                    <input type="text" id="phone_number" v-model="customer.phone" name="title" class="form-control" placeholder="Enter Phone number">
                </div>
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Editar usuario </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
/* import axios from "axios";
import { server } from "../../helper";
import router from "../../router";

export default {
    data() {
        return {
        id: 0,
        user: {}
        };
    },
    created() {
        this.id = this.$route.params.id;
        this.getUser();
    },
    methods: {
        editUser() {
        let userData = {
            name: this.user.name,
            email: this.user.email,
            phone: this.user.phone
        };
        axios.put(`${server.baseURL}/users/${this.id}`, userData).then(data => {
                router.push({ name: "home" });
            });
        },
        getUser() {
        axios
            .get(`${server.baseURL}/users/${this.id}`)
            .then(data => (this.user = data.data));
        },
        navigate() {
        router.go(-1);
        }
    }
}; */
</script>