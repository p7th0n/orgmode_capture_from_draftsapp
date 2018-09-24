# Org-mode capture from Drafts app

## Features

- Capture text from iOS [Drafts app](https://getdrafts.com/) into Org-mode.
- Add org-mode style tags from your [Drafts tags](https://vimeo.com/276105416).

## Installation

- Get the [Drafts app](https://getdrafts.com/) for iPhone or iPad.
- Get [Org-mode capture](https://actions.getdrafts.com/a/1Pd) action for Drafts from the iOS device.
- Change the Dropbox (second) step to your target org file.

### Dropbox (second step)

```bash

fileNameTemplate:   Test.inbox.org      # <<< change to your target org file
folderTemplate:     /Notes              # <<< change to your org folder on Dropbox
template:

            * [[title]]

            [[body]]
            :PROPERTIES:
            :Created:  [[[date]]] [[[time]]]
            :END:

writeType:          prepend

```

## Usage

- The Drafts app is great for quickly capturing any kind of text.  Like the tagline says, _Where Text Starts._  Decide later whether it is email, text, tweet or whatever.
- This action is for capturing text to Org-mode from iPhones and iPads.
- The action converts Drafts tags to Org-mode style tags.
- Drafts app is super useful for capturing text from almost any iOS app. This org-mode capture action is a quick step to getting it into the Org-mode workflow.

## Links

- [Org-mode](https://orgmode.org/): Org mode is for keeping notes, maintaining TODO lists, planning projects, and authoring documents with a fast and effective plain-text system.
- [Org-mode Capture](https://orgmode.org/manual/Capture.html): Capture lets you quickly store notes with little interruption of your work flow.
- Looking for Org-mode apps for iOS? Check out [Beorg](https://beorgapp.com/) and [MobileOrg](https://mobileorg.github.io/)
