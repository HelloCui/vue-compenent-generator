# 目录结构

```
.
│  gulpfile.js                                // gulp文件，用于发布                    
│  README.md                                  // 项目介绍文件
│  TODO.md                                    // 用于记录接下来要做的事情
│  
├─build                                       // 开发、打包配置文件目录，无需关注
│  │  webpack.base.config.js                  // webpack基本配置文件
│  │  webpack.dev.config.js                   // webpack开发配置文件
│  │  webpack.dist.config.js                  // webpack打包配置文件
│  │  
│  └─bin                                      // 非webpack配置文件目录，可直接用node运行
│          build-entry.js                     // 入口生成文件，用于自动生成文档和示例路由文件
│          
├─dist                                        // 打包后的文件生成到这个目录，无需关注
│      
├─docs                                        // 文档和示例放在这里，开发服务也是从这里启动，关键目录
│  │  doc.config.js                           // 文档配置文件，里面的配置项用于自动生成文档和示例的
│  │                                          // 路由和菜单，改动此文件要重启服务才会生效
│  │
│  ├─demos                                    // 示例目录
│  │     home.vue                             // 主页面
│  │     index.js                             // 路由文件，自动生成，无需关注
│  │          
│  ├─mds                                      // 文档目录，主要放markdown文件
│  │  │  index.js                             // 路由文件，自动生成，无需关注
│  │  │  
│  │  ├─intro                                 // 介绍文档目录
│  │         dirIntro.md                      // 目录结构介绍文档，对的，就是你看的这个文档啦
│  │         docIntro.md                      // 创建文档和示例介绍文档
│  │          
│  └─src                                      // 文档和示例页面的支撑代码，主要是入口文件和页面基础框架，无需关注
│      │  App.vue
│      │  demo.js                             // 示例入口文件
│      │  DemoApp.vue
│      │  index.html
│      │  main.js                             // 文档入口文件
│      │  routes.js                           // 路由处理文件，用于处理自动生成的路由文件
│      │  
│      ├─components                           // 文档和示例页面用到的组件
│      │      demoHeader.vue
│      │      demoInstall.js
│      │      demoNav.vue
│      │      docInstall.js
│      │      nav.vue
│      │      simulator.vue
│      │      
│      ├─style
│      │      markdown.less
│      │      mixins.less
│      │      
│      └─utils                                // 工具文件目录
│              iframe-router.js               // 用于同步文档和示例的路由
│              index.js
│
└─src                                         // 核心代码，也就是最终打包发布到npm上的代码
    │  index.js                               // 入口文件
    │  
    ├─assets                                  // 资源文件目录
    │  ├─images                               // 图片目录
    │  │      
    │  └─styles                               // 样式目录
    │          common.less
    │          index.less
    │          mixins.less
    │          reset.less
    │          
    ├─components                              // 组件目录
    │          
    └─js                                      // 工具文件目录

```
