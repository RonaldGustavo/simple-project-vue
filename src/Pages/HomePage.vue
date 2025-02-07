<template>
    <div class="container">
        <BaseCard :user='user' :handle-logout="handleLogout"/>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, watchEffect } from 'vue';
import BaseCard from '@/components/BaseCard.vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const store = useStore();
const router = useRouter()
const user = computed(() => store.state.user.email);

//trigger first render
watchEffect(() => {
    console.log("first render")
});

const handleLogout = ()=> {
    Swal.fire({
            title: "Success",
            text: "Successfully Logout",
            icon: "success"

        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                router.back()
            } else {
                return
            }
        })
}

</script>