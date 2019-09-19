/* 订单管理 */
const Order = () => import('@/pages/Login.vue')
const OrderList = () => import('@/pages/Login.vue')
const ProductManage = () => import('@/pages/Login.vue')
const ProductionList = () =>
    import('@/pages/Login.vue')
const ReviewManage = () =>
    import('@/pages/Login.vue')
const ReturnGoods = () => import('@/pages/Login.vue')

/* 产品管理 */
const Goods = () => import('@/pages/Login.vue')
const GoodsList = () => import('@/pages/Login.vue')
const GoodsClassify = () => import('@/pages/Login.vue')

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '订单管理',
            icon: 'icon-email'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表',
                    icon: 'icon-quit'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理',
                    icon: 'icon-service'
                },
                children: [
                    {
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表',
                            icon: 'icon-nav'
                        }
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理',
                            icon: 'icon-finance-manage'
                        }
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理',
                    icon: 'icon-product-manage'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '产品管理',
            icon: 'icon-order-manage'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表',
                    icon: 'icon-home'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类',
                    icon: 'icon-product-manage'
                }
            }
        ]
    }
]

export default dynamicRoutes
