---
path: /blog/react-auto-read-SMS-in-mobile-web-browser/
slug: react-auto-read-SMS-in-mobile-web-browser
date: 2024-06-03T16:46:24.033Z
title: "React: Auto read SMS in mobile web browser"
tags:
  - how-to
  - React
  - tech
---

I came across building this feature of implementing auto read OTP from SMS for website which is opened in a mobile browser. For this feature there is

a WebOTP API. [This](https://developer.chrome.com/docs/identity/web-apis/web-otp) is the documentation which is fairly good. I am writing about my experience building this feature in React.

I created a demo website in react for everyone to test. [React-link](https://auto-otprt.netlify.app/). [Github link](https://github.com/tripti1410/auto-read-otp-web-demo). Below is the video of this demo receiving OTP and verifying successfully. This is done in Safari mobile browser.

[Demo Safari mobile browser](https://youtube.com/shorts/U1lAtdPYtHg?feature=share)

## Steps to test this feature in the demo.

1. Open this website in mobile.
2. Send this msg to your phone.

<aside>
This is test msg.

@auto-otprt.netlify.app #123456

</aside>

3. And you should get a prompt. For reading the OTP from SMS.
4. click on it and OTP will get filled.

## The most important things to remember.

1. The Text msg send from server should be formatted properly. This is the most important thing otherwise this feature will not pick it up.
2. In the documentation they have mentioned good and bad examples text messages.
3. Use the `<input>` element with `type="text"` `inputmode="numeric"` `autocomplete="one-time-code"`
4. Keep the focus on the input field num keypad will be opened.
5. InvalidStateError: OTP retrieval timed out.

This error comes when page is loaded and navigate api tries to access the OTP but it cant so it gets time out. There is some time limit as well to abord.

## Tested in these browsers:

1. Chrome Android
2. Firefox for Android
3. Opera Android
4. Safari on iOS
5. Samsung Internet
6. WebView Android

### References:

[https://tech.oyorooms.com/implementing-automatic-sms-verification-for-websites-oyo-9375feba0749](https://tech.oyorooms.com/implementing-automatic-sms-verification-for-websites-oyo-9375feba0749)

[https://developer.chrome.com/docs/identity/web-apis/web-otp](https://developer.chrome.com/docs/identity/web-apis/web-otp)
