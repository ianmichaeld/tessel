const { IncomingWebhook, WebClient } = require('@slack/client');
const slackWebhookUrl = 'https://hooks.slack.com/services/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'

const spamSlack = new IncomingWebhook(slackWebhookUrl);

// spamSlack.send('Add this line to your ambient.js: const Slack = require("./slack.js")', (error, resp) => {
//   if (error) {
//     return console.error(error);
//   }
//   console.log('Notification sent');
// });

const Slack = function(message) {
  spamSlack.send( message, (error, resp) => {
    if (error) {
      return console.error(error);
    }
    console.log('Notification sent');
})}

module.exports = Slack;

const Slack = require('./slack.js')
