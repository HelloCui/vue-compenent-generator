export default {
    // nav 代表菜单，因为菜单和路由紧密相关，所以这项配置也影响了路由
    nav: [{
        // 菜单名，会显示到菜单，可省略
        name: '开发指南',
        // 分组
        groups: [{
            // 分组名，会显示到菜单，可省略
            // name: '分组1',
            // 菜单项集合，会显示到菜单，并且生成对应的路由
            list: [{
                // 菜单所对应的路由，同时也表示页面文件路径，ps:项目介绍绑定README.md，不对应文件路径
                path: '/',
                // 菜单标题，副标题用-隔开：主标题 - 副标题
                title: '项目介绍',
                // 代表这个页面没有独立示例，不会生成示例页面和路由
                noExample: true
            }, {
                path: '/intro/dirIntro',
                title: '目录结构',
                noExample: true
            }, {
                path: '/intro/docIntro',
                title: '创建文档与示例',
                noExample: true
            }, {
                path: '/intro/commitIntro',
                title: '代码提交规范',
                noExample: true
            }, {
                // 项目介绍绑定CHANGELOG.md，不对应文件路径
                path: '/changelog',
                title: '更新日志',
                noExample: true
            }]
        }]
    }, {
        name: '其它',
        groups: [{
            list: [{
                path: 'https://sindresorhus.com/github-markdown-css/',
                title: 'markdown语法',
                noExample: true
            }]
        }]
    }]
}
