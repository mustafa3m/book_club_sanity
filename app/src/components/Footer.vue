<template>

  <footer id="footer" >

    <div class="icon">

      <p>Let s get in touch.</p>

      <div  class="icon-image">

        <a href="https://www.facebook.com/"><img src="/images/facebook.jpg" alt="image facebook" /></a>
        <a href="https://www.instagram.com/"><img src="/images/twitter.jpg" alt="image twitter" /></a>
        <a href="https://accounts.google.com/ServiceLogin/signinchooser?hl=no&passive=true&continue=https%3A%2F%2Fwww.google.no%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src="/images/mail.jpg" alt="image envelope" /></a>

      </div>

    </div>
  

  </footer>

</template>


<script>
  export default {
    data() {
      return {
        
      }
    },
  };
</script>

<style scoped>
  footer {
    background: var( --background-color-footer);
    width: 100%;
    padding: 30px;
    font-size: 1.8rem;
    text-align: center;
    color: var(--color-white);
   
  }
 

  .icon li {
    color: var(--color-white);
    font-size: 30px;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    margin: 0 15px;
  }
  .icon-image {
    display: flex;
    justify-content: center;
    gap:1rem;
  }

  .icon-image a img {
    height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: 1rem;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .icon-image a img:hover {
    transform: scale(1.1);
  }
  .icon p {
    margin-bottom: 3rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    footer{
      padding: 0 ;
      width: 100%;
      margin-top: 1rem;

    }
    .icon-image {
      flex-direction: column;
    }

     .icon-image a img {
    height: 1.5rem;
    width: 1.5rem;
    max-width: 30%;
     }
    .icon p {
      margin-bottom: 0.2rem;
    }

    .icon li{
      font-size:0.1rem;
    }
  }
</style>
