export default  {
    state: {
        collapse:false,     //菜单栏是否折叠
        loadMenus: false // 菜单和路由加载状态
    },
    getters:{
        collapses: state =>{// 对应着上面state
            return state.collapse;
        }
    },
    mutations: {
        toggleSideBar(state){  // 改变收缩状态
            state.collapse = !state.collapse
        },
        setLoadMenus(state, loadMenus){  // 改变菜单和路由的加载状态
            state.loadMenus = loadMenus;
        }
    },
    action: {
        updateLoadMenus({ commit },status) {
            return new Promise((resolve, reject) => {
              commit('setLoadMenus', status)
            })
          }
    }
}