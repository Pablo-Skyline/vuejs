<template>
    <div class="container-fluid">
        <div class="text-center">
            <h1>Lista de usuarios</h1>
        </div>

        <div class="">
            <table class="table table-bordered">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user._id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                    <router-link :to="{name: 'Edit', params: {id: user._id}}" class="btn btn-sm btn-outline-secondary">Editar</router-link>
                                    <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteUser(user._id)">Eliminar</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../helper";

export default {
    data() {
        return {
        users: []
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
        axios
            .get(`${server.baseURL}/users`)
            .then(data => (this.users = data.data));
        },
        deleteUser(id) {
        axios
            .delete(`${server.baseURL}/users/${id}`)
            .then(data => {
            console.log(data);
            window.location.reload();
            });
        }
    }
};
</script>