/**
 * 作为一个独立模块对外暴露一个 js function / class
 * 函数的原型(prototype)上定义了一个注入 compiler 对象的 apply 方法
 */
class HelloWorldPlugin {
  constructor(options) {
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
    console.log(options);
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
  }

  apply(compiler) {
    /**
     * 该钩子在 entry 逻辑被处理完后触发
     */
    compiler.hooks.entryOption.tap("HelloWorldPlugin", (context, entry) => {
      console.log("------------------------------------------------------");
      console.log(entry);
      console.log(context, " // 默认为项目根目录，可在配置文件中修改");
      console.log("------------------------------------------------------");
    });
  }
}

module.exports = HelloWorldPlugin;
