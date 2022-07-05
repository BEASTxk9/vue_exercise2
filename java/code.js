const app = Vue.createApp({
template: `
<div class="text-center">
  
<label for="name">Name:</label><br>
<input class="text-center" type="text" id="name" placeholder="Enter your Name"><br>
<hr>
<label for="age">Age:</label><br>
<input class="text-center" type="text" id="age" placeholder="Enter your age"><br>
<hr>
<button v-on:click="getUser()">Display</button>

<br><br>
<p id="output" v-show="isVisible">My Name is {{firstName}} and I am {{age}} years old.</p>

</div>
`,



    data(){
        
        return{
firstName: "...",
age: "...",

        }
    },

    methods:  {
       async getUser(){
       
         
            
            this.firstName = document.getElementById("name").value,
            this.age = document.getElementById("age").value,

            document.getElementById("output").innerHTML = "";

            if(parseInt(this.age) > 17){
                confirm("You have met the requirments")
                this.isVisible = true;
            }else{
                confirm("You have not met the requirments.")
                this.isVisible = false;
            }
        }
   
    },
})

app.mount("#app");