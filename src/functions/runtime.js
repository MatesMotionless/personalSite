// import {reactive} from "vue";
//
//
// export const RUNTIME = reactive({
//     state: {
//         openedApps: {},
//     },
//     mutations: {
//         setOpenApp(state, {appName, isOpen}){
//             state.openedApps[appName] = isOpen;
//         },
//         closeApp(state, appName){
//             state.openedApps[appName] = false;
//         },
//         openApp(state, appName){
//             state.openedApps[appName] = true;
//         }
//     },
//     getters: {
//         isOpenedApp(state, appName){
//             return state.openedApps[appName] || false;
//         }
//     }
// });