import {reactive} from "vue";

export const terminalLogic = reactive({
    checkCommand(command){
        return typeof this.commands[command] === 'function';
    },
    runCommand(command, args, context){
        return this.commands[command](args, context);
    },
    commands: {
        open(){
            return "TODO: open"
        },
        help(args){
            if (args){
                return "command help has no arguments";
            }
            return 'Available commands: <br>' + Object.keys(this).join('<br>');
        },
        man(args){
            
        }
    }

});


export function parseCommand(commandString) {
    // Split the command string by spaces
    let parsed = commandString.trim().split(/\s+/);

    // Extract command (cmd), argument (arg), and the rest as context
    let cmd = parsed[0];                    // First word is the command
    let arg = parsed[1] || null;             // Second word is the argument, or null if missing
    let context = parsed.slice(2);           // Rest of the words form the context

    return { cmd, arg, context };
}