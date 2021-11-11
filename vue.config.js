module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/FMSpace/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/main.scss";`,
            },
        },
    },
}
