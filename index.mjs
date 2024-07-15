import {log} from './log.mjs';

export const handler = async (event) => {
    log('Log de execução depois do github actions event: ' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
      };
  };