# A very niche chrome extension
Browsing through Atom's online package & theme repositories to find a suitiable plugin got on my nerves.

Ever since I started using Atom, the images on the site have been broken.

## Installation
> Intended for browsers that work with Chromium-based extensions (e.g. Google Chrome, Brave Browser, perhaps that one invite-only hipster browser you use that's still in beta)

Install via chrome's webstore at [this link](https://chrome.google.com/webstore/detail/atomio-%E2%80%94-image-fixer/dckhejcdhaojgaafhjmeengkkilgejma) or DIY:

1. Clone this repo
    `git clone https://github.com/nlydv/atom-io-imgfix.git`
2. In your browser go to the extensions page
3. Toggle `developer tools` if not enabled already
4. Click `load unpacked` and select the cloned repo folder
5. Test it by going to a [package page](https://atom.io/packages/linter)
6. Observe working images
7. Rejoice

## How?
Turns out all the original image links were embeded in the html elements already.

## Isn't a dedicated browser extension overkill?
Yes.
