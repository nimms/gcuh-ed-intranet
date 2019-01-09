import SharepointClient from './SharepointClient';

describe('SharepointClient', () => {
  test('connects to sharepoint', () => {
    const serverUrl =
      'https://9318e5dc-583c-435e-b075-3728d2caf061.mock.pstmn.io';
    const url =
      '/items?fbclid=IwAR2_mv-W_riPcCubDt1ReV4XltXnMwg4JMalXVBV-ZPTogX6kxxe4vntHD8';
    const spClient = new SharepointClient(serverUrl);
  });
});
