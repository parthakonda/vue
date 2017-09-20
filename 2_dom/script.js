new Vue({
    el: '#app',
    data: {
        title: 'Hello world'
    },
    methods: {
        sayHello: function() {
            return "Hi";
        },
        sayTitle: function() {
            return this.title;
        }
    }
})