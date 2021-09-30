const { App } = require('@slack/bolt');
require('dotenv').config();

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
});


(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    app.message('hello', async ({message, say}) => {
        await say(`Hello there <@${message.user}`)
    })
    console.log('⚡️ Bolt app is running!');
})();