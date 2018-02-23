Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click

Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameInOrderPayment").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "mdoughty1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "5a3934705a3674541953885b13bb1cb220c84dcfba368273"
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_safepay").Set "OFF"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click
