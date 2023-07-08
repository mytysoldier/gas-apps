function myFunction() {
    const threads = GmailApp.search('subject:(配達完了:ご注文商品の配達が完了しました。)');
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
    // Logger.log(threads[0].isUnread());
    // Logger.log(threads[0].getMessages()[0].getBody());
}

function sendSlack(slackText) {
    var userProperties = PropertiesService.getScriptProperties();
    var api_key = userProperties.getProperty('webhooks_APIKEY');
    var webHookUrl = api_key;

    var jsonData =
    {
        "text": slackText,
        "link_names": 1,
        "username": "配達完了"
    };

    var payload = JSON.stringify(jsonData);

    var options =
    {
        "method": "post",
        "contentType": "application/json",
        "payload": payload
    };

    // リクエスト
    UrlFetchApp.fetch(webHookUrl, options);
}