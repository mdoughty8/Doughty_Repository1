Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("SafePay username field").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "michael1"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "5a94624468b330daea8c88ecdea5d186eb5da6b5e2fc"
Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("save_safepay").Set "OFF"
