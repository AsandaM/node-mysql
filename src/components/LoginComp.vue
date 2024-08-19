<template>
  <!-- <div class="container" v-if = "!$cookies.get('token')" -->
    <div class="container">  
      <div class="row">
        <div>
            <h1>Welcome Back</h1>
        </div>
        <div class="form col-md-5">
         <div class="contact-form">
            <form>
              <h3 class="title">Login</h3>
              <div class="input-container" v-for="field in fields" :key="field.name">
                <input :type="field.type" :name="field.name" class="input" v-model="form[field.name]" @focus="focusFunc" @blur="blurFunc" />
                <label>{{ field.label }}</label>
                <span>{{ field.label }}</span>
              </div>
              <input type="" value="Login" class="btn" @click="login()"/>
            </form>
          </div>
        </div>
  
      </div>
      </div>

      <!-- <div v-else>
       <about-view/>
      </div> -->
    </template>
    
    <script>
    // import AboutView from '@/views/AboutView.vue';
    export default {
      data() {
        return {
          form: {
            username: '',
            password: ''
          },
          fields: [
            { name: 'username', label: 'Username', type: 'text' },
            { name: 'password', label: 'Password', type: 'password' }
          ]
        };
      },
      methods: {
        focusFunc(event) {
          let parent = event.target.parentNode;
          parent.classList.add("focus");
        },
        blurFunc(event) {
          let parent = event.target.parentNode;
          if (event.target.value == "") {
            parent.classList.remove("focus");
          }
        },
        login(){
          this.$store.dispatch('login', this.$data.form)
          location.reload()
        }
      },
      // components:{
      //   AboutView
      // }
    };
  </script>
    
  <style scoped>
   
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body,
  input,
  textarea {
    font-family: "Poppins", sans-serif;
  }
    
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .form {
    width: 100%;
    max-width: 850px;
    background-color: rgba(145, 186, 159, 0.6);
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  
  form {
    padding: 2.3rem 2.2rem;
    z-index: 10;
    overflow: hidden;
    position: relative;
  }
  
  .title {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem;
  }
  
  .input-container {
    position: relative;
    margin: 1rem 0;
  }
  
  .input {
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: none;
    padding: 0.6rem 1.2rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius: 5px;
    transition: 0.3s;
  }
    
  
  .input-container label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;
  }

  
  .btn {
    padding: 0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #1abc9c;
    line-height: 1;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
    width: 100%;
  }
  
  .btn:hover {
    background-color: transparent;
    color: #fff;
  }
  
  .input-container span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    padding: 0 0.4rem;
    color: transparent;
    pointer-events: none;
    z-index: 500;
  }
  
  .input-container span:before,
  .input-container span:after {
    content: "";
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    background-color: #1abc9c;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .input-container span:before {
    left: 50%;
  }
  
  .input-container span:after {
    right: 50%;
  }
  
  .input-container.focus label {
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    font-size: 0.8rem;
  }
  
  .input-container.focus span:before,
  .input-container.focus span:after {
    width: 50%;
    opacity: 1;
  }
  </style>
      