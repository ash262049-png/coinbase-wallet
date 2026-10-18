# Connection screen reference

Ledger Live Nano S connection screen:
https://github.com/LedgerHQ/ledger-live-desktop/issues/3417

Animation source (MIT, copyright Ledger):
https://github.com/LedgerHQ/ledger-live-desktop/blob/develop/src/renderer/animations/nanoS/1PlugAndPinCode/dark.json

`ledger-connect.js` wraps the original animation as JavaScript for offline file:// use.
The playback ends at frame 90, using only the USB insertion segment, not the PIN sequence.
See LEDGER-LICENSE.txt.

Lottie Web light SVG renderer 5.12.2 (MIT):
https://github.com/airbnb/lottie-web
See LOTTIE-LICENSE.md.

The illustration is a visual reference; the local app detects a USB device and does
not authenticate a Ledger device or request a PIN/recovery phrase.

Receiving QR codes use QR Code Generator for JavaScript 1.4.4 by Kazuhiko Arase:
https://github.com/kazuhikoarase/qrcode-generator
See QRCODE-LICENSE.txt. Codes encode user-supplied addresses, not generated wallets.
