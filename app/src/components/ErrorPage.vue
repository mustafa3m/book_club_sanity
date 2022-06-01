<template>

    <div>
        <img src="../public/images/error404.png" alt="ErrorPage">

        <h1>The request page does not exist</h1>

        <router-link class="notfound__button" to="/">
			<button >Click here and we'll guide you back to home!</button>
		</router-link>

    </div>

</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
h1{
    border-top: 1px solid black;
    background-color: red;
    padding : 20px
}
div img{
    width: 900px;
}

</style>