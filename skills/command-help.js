//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "You can contact Michael Zhu at mbzhu1@berkeley.edu if you have any questions. \n Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.enrichCommand(message, "recommend") + ": recommends classes at UC Berkeley for you";
        text += "\n- " + bot.enrichCommand(message, "reminder") + ": set midterm reminders on Google Calendar";
        text += "\n- " + bot.enrichCommand(message, "lecture") + ": watch online lectures";
        bot.reply(message, text);
    });
}
