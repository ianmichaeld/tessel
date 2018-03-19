const { IncomingWebhook, WebClient } = require('@slack/client');
const slackWebhookUrl = 'https://hooks.slack.com/services/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'

const spamSlack = new IncomingWebhook(slackWebhookUrl);

spamSlack.send('Hello World', (error, resp) => {
  if (error) {
    return console.error(error);
  }
  console.log('Notification sent');
});
