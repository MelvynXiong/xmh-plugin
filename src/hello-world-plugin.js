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
     * 在配置文件中的 plugin 被初始化后调用
     */
    compiler.hooks.environment.tap("HelloWorldPlugin", () => {
      console.log(1);
      // console.log("------------------------------------------------------");
      // console.log("无参数");
      // console.log("------------------------------------------------------");
    });

    /**
     * 在 environment 钩子后立即调用
     */
    compiler.hooks.afterEnvironment.tap("HelloWorldPlugin", () => {
      console.log(2);
      // console.log("------------------------------------------------------");
      // console.log("无参数");
      // console.log("------------------------------------------------------");
    });

    /**
     * 该钩子在 entry 逻辑被注册后触发
     */
    compiler.hooks.entryOption.tap("HelloWorldPlugin", (context, entry) => {
      console.log(3);
      // console.log("------------------------------------------------------");
      // console.log(entry);
      // console.log(context, " // 默认为项目根目录，可在配置文件中修改");
      // console.log("------------------------------------------------------");
    });

    /**
     * 在一系列内部插件集合被注册完后触发
     */
    compiler.hooks.afterPlugins.tap("HelloWorldPlugin", (compiler) => {
      console.log(4);
      // console.log("------------------------------------------------------");
      // console.log(compiler);
      // console.log("------------------------------------------------------");
    });

    /**
     * resolve 处理逻辑被注册完后触发
     */
    compiler.hooks.afterResolvers.tap("HelloWorldPlugin", (compiler) => {
      console.log(5);
      // console.log("------------------------------------------------------");
      // console.log(compiler);
      // console.log("------------------------------------------------------");
    });

    /**
     * 在触发编译前调用
     */
    compiler.hooks.beforeRun.tapAsync("HelloWorldPlugin", (compiler, next) => {
      console.log(6);
      next();
      // console.log("------------------------------------------------------");
      // console.log(compiler);
      // console.log("------------------------------------------------------");
    });

    /**
     * 当进行单次打包构建的过程中需要重新打包时触发
     */
    compiler.hooks.additionalPass.tapAsync("HelloWorldPlugin", (next) => {
      console.log(7);
      next();
      // console.log("------------------------------------------------------");
      // console.log("无参数");
      // console.log("------------------------------------------------------");
    });

    compiler.hooks.run.tapAsync("HelloWorldPlugin", (compiler, next) => {
      console.log(8);
      next();
      // console.log("------------------------------------------------------");
      // console.log(compiler);
      // console.log("------------------------------------------------------");
    });

    /**
     * 当一次新的构建被触发但是还没开始时被调用
     */
    compiler.hooks.watchRun.tapAsync("HelloWorldPlugin", (compiler, next) => {
      console.log(9);
      next();
      // console.log("------------------------------------------------------");
      // console.log(compiler);
      // console.log("------------------------------------------------------");
    });

    /**
     * params 用来创建 compilation
     */
    compiler.hooks.beforeCompile.tapAsync(
      "HelloWorldPlugin",
      (params, next) => {
        console.log(10);
        next();
        // console.log("------------------------------------------------------");
        // console.log(params);
        // console.log("------------------------------------------------------");
      }
    );
  }
}

module.exports = HelloWorldPlugin;
