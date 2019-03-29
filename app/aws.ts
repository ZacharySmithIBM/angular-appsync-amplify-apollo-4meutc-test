import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

const endpoint =
  'https://sgfwvgegg5fexicm2pw54ioxsq.appsync-api.us-east-1.amazonaws.com/graphql';

export const appsyncClient: any = new AWSAppSyncClient({
  disableOffline: true,
  url: endpoint,
  region: 'us-east-2',
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: 'da2-fvy2xmmiwrhpzj27o356u5wuwq',
  },
});
