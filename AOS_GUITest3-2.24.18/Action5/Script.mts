'apply hover over icon option (?)

'Sync step to ensure object loads before continuing to next step
Browser("Advantage Shopping").Page("Advantage Shopping").Sync

Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
