<template>
    <nav>
        <v-app-bar app color="White" min-height="50">
            <v-app-bar-nav-icon color="Black" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
                src="@/assets/logo.png"
                max-height="100"
                max-width="150"
                contain
            ></v-img>
        </v-app-bar >
    </nav> 
</template>

<script>

export default {
    data(){
    }
}
</script>