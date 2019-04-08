module.exports = (env) => {
    conf = env? env : (process.env.NODE_ENV && process.env.NODE_ENV==='production')?'prod':'dev';
    return require(`./webpack.${conf}.js`)
}