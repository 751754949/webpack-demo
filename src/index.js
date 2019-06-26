import './assets/style/index.less'
console.log("未打包文件")
if (module.hot) {
    module.hot.accept()
}

console.log("hj:"+process.env.NODE_ENV)