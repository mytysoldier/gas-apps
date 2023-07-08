function myFunction() {
    const threads = GmailApp.search('subject:(お荷物お届け完了のお知らせ)');
    let unreadMailExists = false;
    // 未読メッセージがあるかチェック
    for (thread of threads) {
        if (thread.isUnread()) {
            unreadMailExists = true;
        }
    }
    if (unreadMailExists) {
        // Slackで配達完了したことを通知
        sendSlack("荷物届いたよ！");
    }
}

function sendSlack(slackText) {
    const userProperties = PropertiesService.getScriptProperties();
    const webhookUrl = userProperties.getProperty('webhook_url');

    const jsonData =
    {
        "text": slackText,
        "link_names": 1,
        "username": "荷物配達完了"
    };

    const payload = JSON.stringify(jsonData);

    const options =
    {
        "method": "post",
        "contentType": "application/json",
        "payload": payload
    };

    // リクエスト
    UrlFetchApp.fetch(webhookUrl, options);
}