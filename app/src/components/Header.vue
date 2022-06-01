<template>
  <header>

    <div class="container-header">

      <nav class="nav_checkbox">
        
         <img class="logo" src="/images/logo-club.png" alt="image-logo"> 
      
        <input type="checkbox" id="tab-nav" class="tab-nav" />

        <label for="tab-nav" class="label">
          <div class="burger"></div>
          <div class="burger"></div>
          <div class="burger"></div>
        </label>

        <ul  class="content_nav">
          
          <li><router-link   class="link" :to="{ name: 'home' }">HOME</router-link></li>
          <li ><a class="link" href="#footer">CONTACT</a></li>
          <li ><router-link class="link" :to="{ name: 'about' }">ABOUT</router-link></li>
          
           
        </ul>

      </nav>
    </div>
  </header>
</template>

<script>
 
  export default {

    data() {

      return {
        activeMenu : 'books'   
      };

    },

    methods: {
      
    
     
     
    },
  };
</script>

<style lang="css" scope>
  header {
    background-color: var(--background-color);
    width: 100%; 
    margin-bottom: 3rem;
  }

  .nav_checkbox {
    display: grid;
    grid-template-columns: repeat(2,1fr) ;
    align-items: center;
    padding: 10px 0px;
  }

  .logo {
    text-decoration: none;
    color: var(--color-white);
    padding-left: 10px;
    height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .tab-nav {
    outline: none;
    display: none;
  }

  .label {
    display: none;
    color: var(--color-white);
  }

  .burger {
    width: 35px;
    height: 5px;
    background-color: var(--color-white);
    margin-top: 5px;
  }

  .content_nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .content_nav .link {
    display: inline-block;
    padding-right: 10px;
    margin: 10px;
    padding: 20px;
    text-decoration: none;
    color: var(--color-white);
    position: relative;
  }

 

  .content_nav .link::after {
    content: "";
    display: block;
    height: 2px;
    background-color: var(--color-white);
    position: absolute;
    left: 0;
    right: 0;
    transform-origin: right;
    transform: scale(0, 1);
    transition: transform ease-in-out 0.5s;
  }

  .content_nav .link:hover::after {
    transform: scale(1, 1);
  }

  @media screen and (max-width: 600px) {
    .logo {
      margin-top: 1rem;
      width: 80px;
    }

    .label {
      display: grid;
      cursor: pointer;
      grid-column: 3;
      padding-right: 10px;
    }

    .content_nav {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr;
      grid-column: 1/4;
      text-align: center;
      max-height: 0;
      overflow: hidden;
      transition: all ease-in-out 0.6s;
    }
    .content_nav .link {
      font-size: 1rem;
    }

    .nav_checkbox input:checked ~ .content_nav {
      width: 100%;
      max-height: 500px;
    }

    .content_nav .link {
      padding: 15px 0px;
    }

    
   
   
  }
</style>
