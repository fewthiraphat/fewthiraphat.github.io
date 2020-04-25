window.onload = function () {
var app = new Vue({
    el:'#vue-app',
    data:{
        head:'To-Do App',
        messageAsk:"คุณอยากจะทำอะไร?",
        addThingsToDo:{
            things:''
        },
        thingsToDo:[],
        finish:false,
    },
    methods:{
        addThing:function(){
            this.thingsToDo.push({
                things:this.addThingsToDo.things
            })
            this.addThingsToDo.things = ''
        },
        checked:function(){
            this.finish = true;
        }
    }
})
}
console.log("Hello World");