import {reactive} from "vue";


export const RUNTIME = reactive({
    state: {
        availableApps: [],
    },
    setAvailableApps(apps){
        this.state.availableApps = apps;
    },
    closeApp(app){
        app.isOpen = false;
    },
    openApp(app){
        app.isOpen = true;
    }
});