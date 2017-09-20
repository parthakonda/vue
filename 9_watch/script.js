new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        test: 0,
        counter_copy: 0
    },
    computed: {
        output: function() {
            console.log("output");
            return this.counter > 5 ? "Greater than 5" : "Less than 5";
        }
    },
    watch: {
        counter: function() {
            this.counter_copy = this.counter;
        }
    },
    methods: {
        increase: function() {
            this.counter++;
        },
        decrease: function() {
            this.counter--;
        },
        updateCoordinates: function(e){
            this.x = e.clientX;
            this.y = e.clientY;
        },
        increaseStep: function(step) {
            this.counter += step;
        },
        decreaseStep: function(step) {
            this.counter -= step;
        },
        alertMe: function() {
            alert();
        },
        vary() {
            let x = 10;
            console.log("calling", x);
            return this.counter > 5 ? "Greater than 5" : "Less than 5";
        }
    }
})