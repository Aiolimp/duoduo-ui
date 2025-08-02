import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        // 继承自什么配置
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        // 哪些文件需要被eslint检查
        files: ['**/*.{ts,tsx,js}'],
        //哪些文件不需要被eslint检查
        ignores: ['apps/**/*/{tmp,.dumi}/**/*', '*.js', '**/*/build/**/*', '**/*/es/**/*', '**/*/dist/**/*'],
        // 自定义规则
        rules: {
            // 禁止使用console
            'no-console': 'off',
        },
        // 语言选项
        languageOptions: {
            // 解析器
            parser: tseslint.parser,
            // 解析器选项
            parserOptions: {
                // ts项目的配置文件
                project:[],
              // ts配置根目录
                tsconfigRootDir: import.meta.url,
            }
        }
    }
)
