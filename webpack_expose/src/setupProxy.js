
// 该文件为代理配置/读取本地mock数据

const {createProxyMiddleware}  = require('http-proxy-middleware')
const express = require('express')
const path = require('path')

// 读取配置脚本中的环境变量
const REACT_APP_ENV = process.env.NODE_MYENV

const envMap = {
    "development":"访问测试环境",
    "development_mock":"访问本地mock数据",
}

module.exports = (app)=>{
    console.log('REACT_APP_ENV:',envMap[REACT_APP_ENV] ? envMap[REACT_APP_ENV] : '生产环境');
    if (REACT_APP_ENV === 'development_mock') {
        app.use(express.static('mock'))
    } else if (REACT_APP_ENV === 'development') {
        app.use(
            createProxyMiddleware('/api',{
                // 设置目标路径服务器host
                // 本地启动了一个测试的Tomcat
                target:'http://localhost:8080/',
                source:false,
                // 是否需要改变原始主机头为目标URL
                changeOrigin:true,
                // pathRewrite:{
                //     // 重写url路径,将api前缀过滤掉
                //     '^/api':"/",
                // }
            })
        );
    }
}
