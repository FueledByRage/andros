export const MessageHandler = ()=>{
    const handles : { [key: string] : (message : string) => string | Promise<string> } = {};

    const addHandle = ( command : string, handleFunction : (message : string) => string | Promise<string> )=>{

        handles[command] = handleFunction;
    }

    const executeHandler = (message : string ) =>{
        let parts = message.split(' ');
        let result;
        const validsCommands = Object.keys(handles);
        let command = parts.shift() || parts[0];
        command = command.trim();
        if(!validsCommands.includes(command)) return 'Comando invalido';
        
        const interfaceContent = parts.join('');

        result = handles[command](interfaceContent);
        
        return result;
    }

    return{
        handles,
        addHandle,
        executeHandler
    }
}