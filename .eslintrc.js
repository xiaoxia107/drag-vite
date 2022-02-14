module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        semi: [2, 'never'], // 关闭语句不要分号结尾
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'comma-spacing': 0, // 通用空格一致
        quotes: [2, 'single'], // 限制使用单引号
        'no-multiple-empty-lines': [0, { max: 100 }], // 空行最多不能超过100行
        'spaced-comment': 0, //注释空格
        'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
        indent: [2, 4], //缩进风格
        'no-empty': 2,
        'space-before-function-paren': 2,
        'no-multiple-empty-lines': [1, { max: 2 }], // 空行最多不能超过2行
        'comma-spacing': 2, //逗号前后的空格
        'no-multi-spaces': 1, //不能用多余的空格
        'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
        'arrow-spacing': 2,
        'space-unary-ops': [2, { words: true, nonwords: false }], //一元运算符的前/后要不要加空格
        'space-before-function-paren': [2, 'always'], //函数定义时括号前面要不要有空格
        'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
        'space-infix-ops': 2, //中缀操作符周围要不要有空格
        'brace-style': [1, '1tbs'], //大括号风格
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
}
