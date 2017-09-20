new Vue({
    el: '#app',
    data: {
        title: 'Hello world',
        link: "http://googl.com"
    },
    methods: {
        sayHello: function() {
            return "Hi";
        },
        sayTitle: function() {
            this.title = "New update";
            return this.title;
        },
        getLink: function() {
            return "<a href='http://google.com'>Google</a>"
        }
    }
})