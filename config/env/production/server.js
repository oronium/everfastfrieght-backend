module.exports = ({env})=> ({
    url:env('https://everfastfright.herokuapp.com/'),
    proxy:true,
    app:{
        key: env.array('APP_KEY',['xErD0mW/680hpbaFQ1oL2Q==,AM5yUSgnHMbZKMR0R/5HZw==,HpvMIyUQWks7NyLBW4RaIw==,jzsbnyjZc7CjAwFBEkwTwQ=='])
    }
})