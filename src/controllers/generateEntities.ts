const commands = {
    '--name' : (DTO : string, name : string) =>{
        let splitedDTO = DTO.split(' ');
        splitedDTO[0] = `${splitedDTO[0]} ${name}`;
        return splitedDTO.join(' ').replace(',', ' ');
    }
}

export const generateEntities = async (message : string) : Promise<string> => {

    //Split the entity properties from the optional commands
    const messages = message.split(' ');
    //Gotta get optional commands
    if(messages.length > 1) console.log(messages[1]);

    //Turn the properties into an array
    const properties = messages[0].split(';');
    const reply = getDTO(properties);
    return reply
}

const getDTO = async (properties : string[]) =>{
    let entityClass = 'class {'
    
    await Promise.all(properties.map((entity) =>{
        const spliteEntity = entity.split(':');
        entityClass = `${entityClass}  \n const ${spliteEntity[0]} : ${spliteEntity[1]};  \n`
    }));
    entityClass = `${entityClass} }`
    
    return entityClass;
}

const executeComands = (DTO : string, commands : string[]) =>{
    
}