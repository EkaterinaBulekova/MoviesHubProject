module.exports = (env) => {
    console.log(env);
    console.log(process.env.NODE_ENV);
    conf = env? env : (process.env.NODE_ENV && process.env.NODE_ENV==='production')?'prod':'dev';
    console.log(conf);
    return require(`./webpack.${conf}.js`)
}