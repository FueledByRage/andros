export const getState = (message : string) : Promise<string> =>{
    message = removeChars(message);
    const getGeneratedState = async (message : string) =>{ 
        const result = await generateState(message);     
        return result;
    }
    const reply = getGeneratedState(message);
    return reply; 
}

const removeChars = (message : string) : string =>{
    message.replace('interface', '');
    const result = message = message.replace(/.*\{|\}/gi, '');
    return result;
}

const generateState = async (message : string) : Promise<string> =>{
    const messages = message.split(',');
    const factoredMessages = await Promise.all(messages.map((message, index) =>{
        const messageParts = message.split(':');
        return `const [ ${messageParts[0].toLowerCase() }, set${messageParts[0].trim()} ] = useState<${messageParts[1].trim()}>();\n`
    }));
    const formatedMessage = factoredMessages.join();
    return formatedMessage;
}