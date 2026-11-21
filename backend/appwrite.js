const sdk = require("node-appwrite");

const client = new sdk.Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

const storage = new sdk.Storage(client);
const tablesDB = new sdk.TablesDB(client);

module.exports = {
    sdk,
    storage,
    tablesDB
};
