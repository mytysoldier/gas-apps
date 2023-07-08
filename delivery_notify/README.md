# 荷物の配達完了の新着メールが来ていたらSlackで通知

## 使用技術
* Google App Script
* Slack Incoming Webhook

## 処理の流れ
1. 配達ドライバーが荷物完了すると、Gmailに荷物お届け完了メールが届く
2. Google App Script側で時間起動トリガーを組んだスクリプトが動き、荷物お届け完了の新着メールが来ているかチェック
3. 新着メールが来ていて、メール未開封の場合、Slackに通知する

## 補足事項
* Google App Script側でスクリプトの時間起動を設定
* Slack Incoming WebhookのURLは Google App Script の環境変数で保持