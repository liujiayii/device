import router from "../router";
import NProgress from "nprogress";
import 'nprogress'

const constantRouterComponents = {
  Home: () => import('../views/home/home'),
  Product: () => import('../views/product/product'),
  Introduce: () => import('../views/introduce/introduce'),
  ProductDetail: () => import('../views/product/productDetail'),
  Skill: () => import('../views/skill/skill'),
  News: () => import('../views/news/news'),
  Work: () => import('../views/work/work'),
  Contact: () => import('../views/contact/contact'),
}

const menuData = [
  {
    path: "home",
    name: "首页",
    nav: true
  }, {
    path: "introduce",
    name: "公司介绍",
    nav: true
  }, {
    path: "product",
    name: "产品分类",
    nav: true
  }, {
    path: "productDetail",
    name: "产品展示详情"
  }, {
    path: "news",
    name: "公司新闻",
    nav: true
  }, {
    path: "skill",
    name: "技术文章",
    nav: true
  }, {
    path: "work",
    name: "招商合作"
  }, {
    path: "contact",
    name: "联系我们",
    nav: true
  }
]
/*格式化 后端 结构信息并递归生成层级路由表*/
const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const currentRouter = {
      path: `/${item.path}`,
      name: item.name,
      component: constantRouterComponents[item.path.replace(item.path[0], item.path[0].toUpperCase())],
    }
    currentRouter.path = currentRouter.path.replace('//', '/')
    return currentRouter
  })
}
/*路由守卫*/
router.addRoutes(generator(menuData))
router.beforeEach((to, form, next) => {
  (function smoothScroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  })();
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export {menuData}
