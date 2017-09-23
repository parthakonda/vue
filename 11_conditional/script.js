new Vue({
    el: '#app',
    data: {
        posts: [
            {
                author: 'Parthz',
                posted_on: 'Aug 31st 2017',
                title: 'New Blog Post',
                body: 'Hi welcome to my first blog post',
                comments: [
                    {
                        by: 'User1',
                        comment: 'Hey! Nice post'
                    },
                    {
                        by: '@killgrave',
                        comment: 'Nice explanation'
                    }
                ],
                style: {
                    heading_color: 'orange',
                    background: '#d3d3d3',
                    body_color: 'orange'
                }
            },
            {
                author: 'Parthz',
                posted_on: 'Sep 2nd 2017',
                title: 'Understanding VueJS performace',
                body: 'VueJs is a popular javascript framework. Which has the good parts of diff frameworks',
                comments: [
                    {
                        by: 'Partha',
                        comment: 'Hey! Nice post'
                    },
                    {
                        by: 'Srikanth',
                        comment: 'Cool stuff'
                    },
                    {
                        by: 'Reddy',
                        comment: 'Nice post'
                    }
                ],
                style: {
                    heading_color: 'orange',
                    background: '#d3d3d3',
                    body_color: 'orange'
                }
            }
        ]
    },
    methods: {
        
    }
})