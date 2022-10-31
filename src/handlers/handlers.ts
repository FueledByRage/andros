import { MessageHandler } from "../handle/handle";
import { getState } from "../controllers/getStateController";
import { generateEntities } from "../controllers/generateEntities";

const handler = MessageHandler();

//Add a new command and it's handle
handler.addHandle('getState', getState);
handler.addHandle('generateEntity', generateEntities);

export const executeHandler = handler.executeHandler;