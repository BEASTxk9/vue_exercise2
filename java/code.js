const app = Vue.createApp({
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
                alert("You have met the requirments")
                this.isVisible = true;
            }else{
                alert("You have not met the requirments")
                this.isVisible = false;
            }
        }
   
    },
})

app.mount("#app");