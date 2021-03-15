const params = process.argv || []

module.exports = {
    set: function() {
        if(params.includes('--watch')) {
            process.env.NODE_ENV = 'development'
        } else {
            process.env.NODE_ENV = 'production'
        }
    },

    get: function() {
        let NODE_ENV = 'production';

        if(params.includes('--watch')) {
            NODE_ENV = 'development'
        }
        return NODE_ENV
    }
}