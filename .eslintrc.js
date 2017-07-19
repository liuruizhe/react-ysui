module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "env": {
        "browser": true,
        "node": true,
    },
    // 自定义配置
    "rules": {
        "linebreak-style": ["error", "unix"],
        "strict": ["off", "global"],
    },
    // 可能需要添加的插件
    "plugins": [
        "react"
    ],
}