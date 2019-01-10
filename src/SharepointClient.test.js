import SPClient from './SharepointClient';

describe('SharepointClient', () => {
  test('connects to sharepoint', async () => {
    console.log(`connecting to ${process.env.REACT_APP_SHAREPOINT_BASE_URL}`);
    const docs = await new SPClient().getDocuments();
    expect(docs).toBeDefined();
    //console.log(Object.getOwnPropertyNames(docs));
    expect(docs).toHaveLength(7);
  });
});
