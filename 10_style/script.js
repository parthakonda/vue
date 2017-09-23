new Vue({
    el: '#app',
    data: {
        changed: false
    },
    methods: {
        changeColor: function(){
            this.changed = !this.changed;
        }
    }
})