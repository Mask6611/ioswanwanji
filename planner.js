/*************************************

项目名称：planner Pro-日程安排
更新日期：2023-11-17
脚本作者：iOS玩玩鸡💞
公众号：iOS玩玩鸡（ioswwj777）
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Mask6611/ioswanwanji/main/iTunes/planner.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 571588936,
    "receipt_creation_date" : "2023-11-14 13:07:08 Etc/GMT",
    "bundle_id" : "com.btgs.plannerfree",
    "original_purchase_date" : "2023-11-14 12:14:07 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1694250549000",
        "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
        "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
        "product_id" : "com.btgs.plannerfree.yearly",
        "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1694250550000",
        "web_order_line_item_id" : "490000123456789",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "adam_id" : 571588936,
    "receipt_creation_date_pst" : "2023-11-14 05:07:08 America/Los_Angeles",
    "request_date" : "2023-11-16 18:24:42 Etc/GMT",
    "request_date_pst" : "2023-11-16 10:24:42 America/Los_Angeles",
    "version_external_identifier" : 861430221,
    "request_date_ms" : "1700159082193",
    "original_purchase_date_pst" : "2023-11-14 04:14:07 America/Los_Angeles",
    "application_version" : "116",
    "original_purchase_date_ms" : "1699964047000",
    "receipt_creation_date_ms" : "1699967228000",
    "original_application_version" : "116",
    "download_id" : 502953746548902500
  },
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1694250549000",
      "expires_date" : "2099-09-09 09:09:09 Etc/GMT",
      "expires_date_pst" : "2099-09-09 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
      "product_id" : "com.btgs.plannerfree.yearly",
      "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1694250550000",
      "web_order_line_item_id" : "490000123456789",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
      "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
    }
  ],
  "latest_receipt" : "chxm1023",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.btgs.plannerfree.yearly",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.btgs.plannerfree.yearly",
      "auto_renew_status" : "1"
    }
  ],
  "warning" : "仅供学习，禁止转载或售卖",
};

$done({body: JSON.stringify(chxm1023)});
