<template>
   <div>
        <div class="col-md-12 form-wrapper">
            <h2> Crear usuario </h2>
            <form id="create-post-form" @submit.prevent="createUser">
                <div class="form-group col-md-12">
                    <label for="title"> Nombre </label>
                    <input type="text" id="name" v-model="first_name" name="title" class="form-control" placeholder="Nombre completo">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Correo </label>
                    <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Correo">
                </div>
                <div class="form-group col-md-12">
                    <label for="title"> Telefono </label>
                    <input type="text" id="phone" v-model="phone" name="title" class="form-control" placeholder="Numero telefonico">
                </div>
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Crear usuario </button>
                </div>           
            </form>
        </div>
    </div>
</template>

<script>
import UsersService from "../../services/users.service";

export default {
    name: "Crear usuario",
    data() {
        return {
            user: {
                id: 0,
                name: "",
                email: "",
                phone: ""
            },
            submitted: false
        };
    },
    methods: {
        createUser() {
            let data = {
                name: this.name,
                email: this.email,
                phone: this.phone
            };

            UsersService.create(data)
                .then(response => {
                    this.user.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
            
            this.newUser();
        },
        newUser(){
            this.submitted = false;
            this.user = {};
        }
    }
};
</script>