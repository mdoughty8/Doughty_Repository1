
'Order Payment Method

Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "michael1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "5a9234684950613fec54e74f8036a663b7d3d2f1f24786e0"
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_safepay").Set "OFF"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click

