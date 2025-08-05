import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src'], // 入口文件
    dts: true, // 生成dts文件
    splitting: false, // 是否拆分文件，ui库一般不需要
    sourcemap: false, // 生成sourcemap文件
    clean: true, // 清除dist目录
    outDir: 'es', // 修改打包目录
    format: ['esm'] // 设置打包格式为esm
})
