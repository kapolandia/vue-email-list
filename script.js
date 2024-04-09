const { createApp } = Vue;

createApp({
    data() {
        return {
          emailArray: [],
          emailCount: 0,
        };

    },
    mounted(){
        pushEmail:{
            while(this.emailCount < 10){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response)=>{
                    this.emailArray.push(response.data.response);
                })
                this.emailCount++;
                console.log(this.emailArray)
            }

        }
    }


}).mount('#app');
