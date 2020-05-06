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

    /**
     * params 用来创建 compilation
     */
    compiler.hooks.compile.tap("HelloWorldPlugin", (params) => {
      console.log(11);
      // console.log("------------------------------------------------------");
      // console.log(params);
      // console.log("------------------------------------------------------");
    });

    /**
     * 初始化 compilation 的逻辑注册
     */
    compiler.hooks.thisCompilation.tap(
      "HelloWorldPlugin",
      (compilation, compilationParams) => {
        console.log(12);
        // console.log("------------------------------------------------------");
        // console.log(compilation);
        // console.log(compilationParams);
        // console.log("------------------------------------------------------");
      }
    );

    /**
     * 创建 compilation 实例后触发
     */
    compiler.hooks.compilation.tap(
      "HelloWorldPlugin",
      (compilation, compilationParams) => {
        console.log(13);
        // console.log("------------------------------------------------------");
        // console.log(compilation);
        // console.log(compilationParams);
        // console.log("------------------------------------------------------");
      }
    );

    /**
     * 开始分析入口文件，创建模块对象
     * 该钩子为同步并行
     */
    compiler.hooks.make.tapAsync("HelloWorldPlugin", (compilation, done) => {
      console.log(14);
      done();
      // console.log("------------------------------------------------------");
      // console.log(compilation);
      // console.log("------------------------------------------------------");
    });

    /**
     * 完成所有模块的构建，结束编译过程
     */
    compiler.hooks.afterCompile.tapAsync(
      "HelloWorldPlugin",
      (compilation, next) => {
        console.log(15);
        next();
        // console.log("------------------------------------------------------");
        // console.log(compilation);
        // console.log("------------------------------------------------------");
      }
    );

    /**
     * return false 将不会执行输出逻辑
     */
    compiler.hooks.shouldEmit.tap("HelloWorldPlugin", (compilation) => {
      console.log(16);
      // return false;
      // console.log("------------------------------------------------------");
      // console.log(compilation);
      // console.log("------------------------------------------------------");
    });

    /**
     * 在输出 assets 前调用
     */
    compiler.hooks.emit.tapAsync("HelloWorldPlugin", (compilation, next) => {
      console.log(17);
      next();
      // console.log("------------------------------------------------------");
      // console.log(compilation);
      // console.log("------------------------------------------------------");
    });

    /**
     * 每当一个 asset 被输出的时候调用，提供了对输出的 asset 资源的访问
     */
    compiler.hooks.assetEmitted.tapAsync(
      "HelloWorldPlugin",
      (file, info, next) => {
        console.log(18);
        // console.log("------------------------------------------------------");
        // console.log(file);
        // console.log(info);
        // console.log("------------------------------------------------------");
        next();
      }
    );

    /**
     * 输出 assets 完成后调用
     */
    compiler.hooks.afterEmit.tapAsync(
      "HelloWorldPlugin",
      (compilation, next) => {
        console.log(19);
        next();
        // console.log("------------------------------------------------------");
        // console.log(compilation);
        // console.log("------------------------------------------------------");
      }
    );

    /**
     * 单次构建完成后被调用，参数为单次构建的详细统计信息
     */
    compiler.hooks.done.tapAsync("HelloWorldPlugin", (stats, next) => {
      console.log(20);
      next();
      // console.log("------------------------------------------------------");
      // console.log(stats);
      // console.log("------------------------------------------------------");
    });

    /**
     * 构建失败时调用
     */
    compiler.hooks.failed.tap("HelloWorldPlugin", (err) => {
      console.log(21);
      // console.log("------------------------------------------------------");
      // console.log(err);
      // console.log("------------------------------------------------------");
    });

    /**
     * 单次构建的 watching 被 invalidate
     */
    compiler.hooks.invalid.tap("HelloWorldPlugin", (fileName, changeTime) => {
      console.log(22);
      // console.log("------------------------------------------------------");
      // console.log(fileName);
      // console.log(changeTime);
      // console.log("------------------------------------------------------");
    });

    /**
     * 单次构建的 watching 停止
     */
    compiler.hooks.watchClose.tap("HelloWorldPlugin", () => {
      console.log(23);
      // console.log("------------------------------------------------------");
      // console.log(无参数);
      // console.log("------------------------------------------------------");
    });
  }
}

module.exports = HelloWorldPlugin;
