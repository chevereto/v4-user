---
sidebarDepth: 2
---

# Popup Upload Plugin

The Popup Upload Plugin (PUP) is a lightweight JavaScript file that adds Chevereto image uploads to external websites.

::: tip
When PUP is enabled, open `/plugin` on your Chevereto site to get integration instructions.
:::

## How it works

PUP attaches an upload button to editable content. When clicked, it opens the upload dialog and inserts the selected embed code automatically.

Users can upload and insert images without leaving the current website.

## Supported devices

PUP works in modern HTML5 browsers on desktop and mobile.

Tested platforms include Windows, macOS, Linux, and Android (Chrome).

## Installation

Add this script tag to any HTML section of the target website:

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload"></script>
```

Update `src` and `data-url` to match your Chevereto website.

PUP runs only in the browser (DOM-based), so it has no server-side dependencies.

## Customization

Configure PUP with [data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

For example, this uses the red palette:

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-palette="red"></script>
```

All options follow the same pattern: `data-<key>`.

Example: `palette` is configured with `data-palette`.

### Options

All available plugin options are listed below.

### `url`

Target Chevereto website URL.

Type: `String`
Example: `https://demo.chevereto.com`

### `palette`

Button color palette name, or a comma-separated custom color list (HEX, RGB, etc.).

With custom colors, each value is mapped to `%n` placeholders (`%1`, `%2`, ...), which you can use in custom CSS.

Type: `String`
Default: `default`

Values:

```text
default
clear
turquoise
green
blue
purple
darkblue
yellow
orange
red
grey
black
```

### `auto-insert`

Embed code to auto-insert in editable content.

Codes using `full`, `medium`, or `thumbnail` link to the media page.

Use `0` to disable auto-insert.

Type: `String`
Default: `bbcode-embed-medium`

Values:

```text
0
viewer-links
direct-links
frame-links
thumb-links
medium-links
delete-links
html-embed
full-html-embed
medium-html-embed
thumb-html-embed
markdown-embed
full-markdown-embed
medium-markdown-embed
thumb-markdown-embed
bbcode-embed
full-bbcode-embed
medium-bbcode-embed
thumb-bbcode-embed
```

### `auto-close`

Whether the popup should close automatically after insertion.

Use `0` to disable auto-close.

Type: `Integer`
Default: `1`
Values: `0`, `1`

### `sibling`

CSS selector used as the reference node for button insertion.

By default, the button is inserted relative to editable content. If `sibling` is set, PUP inserts relative to the matched element instead.

Type: `String`
Example: `.sibling`

### `sibling-pos`

Button position relative to the `sibling` element.

Type: `String`
Default: `after`
Values: `before`, `after`

### `vendor`

Forum/platform vendor preset.

Type: `String`
Default: `auto`

Values:

```text
bbpress
discourse
discuz
ipb
mybb
nodebb
phpbb
smf
vanilla
vbulletin
woltlab
xenforo
```

### `mode`

Plugin mode.

`auto` binds to matching editors automatically. `manual` disables automatic binding so you can insert buttons explicitly.

Type: `String`
Default: `auto`
Values: `auto`, `manual`

### `target`

CSS selector for target editable content. Use this with manual insertion.

Type: `String`
Default: `auto`
Example: `.selector`

### `lang`

Button language code (2-letter or 4-letter).

Type: `String`
Default: `auto`

Values:

```text
ar
cs
de
es
fi
fr
id
it
ja
nl
pt_BR
ru
zh_CN
zh_TW
```

### `container-class`

Custom button container class name. Mapped to `%cClass` in templates.

Type: `String`
Default: `chevereto-pup-container`
Example: `className`

### `button-class`

Custom button class name. Mapped to `%bClass` in templates.

Type: `String`
Default: `chevereto-pup-button`
Example: `className`

### `html`

[Custom HTML and CSS](#custom-html-and-css).

Type: `String`
Example: `<div>Button</div>`

### `css`

[Custom HTML and CSS](#custom-html-and-css).

Type: `String`
Example: `.div { color: red; }`

### `fit-editor`

Whether PUP should adapt button styling to the target editor toolbar.

If disabled, PUP keeps its own button style (override applies only to supported vendors).

Type: `Integer`
Values: `0`, `1`

### `observe`

CSS selector for elements that trigger sibling observation on click, then button insertion.

Useful for dynamic editors that create editor boxes on demand.

Type: `String`
Example: `.selector`

### `observe-cache`

Whether matched observed elements should be cached.

When enabled, PUP stops observing click events for already matched elements.

Disable this option if your editor is dynamically recreated and not reused as a persistent DOM node.

Type: `Integer`
Default: `1`
Values: `0`, `1`

### Custom HTML and CSS

PUP supports template placeholders, special tokens converted to usable markup.

Template placeholders available:

| Tag      | Description                                                 |
| -------- | ----------------------------------------------------------- |
| %x       | PUP button observer (must be used to trigger button action) |
| %cClass  | Container class name                                        |
| %bClass  | Button class name                                           |
| %iClass  | Icon class name                                             |
| %iconSvg | Vector icon in the form of a ready-to-use SVG HTML tag      |
| %text    | Translated button text                                      |

For custom CSS, you can also use `%n` palette placeholders, where **n** is the color index (`%1`, `%2`, ..., `%n`).

Set the custom template string in an option attribute.

Example HTML template:

```html
<a %x title='%text' class='%bClass'>%iconSvg</a>
```

Use the template by assigning `data-html` in the plugin code:

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-html="<a %x title='%text' class='%bClass'>%iconSvg</a>"></script>
```

Custom CSS works the same way and supports palette placeholders (`%1`, `%2`, ..., `%n`).

Example CSS template:

```
li.%cClass .%bClass{background:%1;color:%2;text-indent:unset;border-radius:3px;position:relative}li.%cClass a.%bClass:hover{background:%3;color:%4;border-color:%5}.%cClass .%bClass svg{font-size:15px;width:1em;height:1em;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;left:50%;top:50%;fill:currentColor}
```

Use the template by assigning `data-css` in the plugin code:

```html
<script async src="//demo.chevereto.com/sdk/pup.js" data-url="https://demo.chevereto.com/upload" data-css="li.%cClass .%bClass{background:%1;color:%2;text-indent:unset;border-radius:3px;position:relative}li.%cClass a.%bClass:hover{background:%3;color:%4;border-color:%5}.%cClass .%bClass svg{font-size:15px;width:1em;height:1em;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;left:50%;top:50%;fill:currentColor};"></script>
```

**Important:** For custom HTML and CSS, keep quote usage valid to avoid breaking attribute syntax.

### Manual button binding

To manually bind a button, add `data-chevereto-pup-trigger` and `data-target` to your own button:

```html
<div id="editor" contenteditable></div>
<button data-chevereto-pup-trigger data-target="#editor">Custom button</button>
```

Manually inserted buttons use the same upload popup and insertion flow, but they do not use plugin options or templating.

## Core features

PUP uses modern browser capabilities to keep integration simple and fast.

Key core features:

### Native JavaScript

PUP is written in modern JavaScript and requires no external library or server module.

The script is about 18KB (around 6KB gzipped). It is minified with [Google Closure Compiler](https://developers.google.com/closure/compiler/), but object names are preserved to keep inspection easier.

It loads asynchronously, so script placement is flexible and it does not block page rendering.

### Smart load and dynamic trigger observer

PUP observes the DOM until the target sibling is available. Once found, it initializes and stops extra observation.

For dynamic editors, PUP can observe clicks on a selector (`observe`) to restart sibling lookup and insert the button when needed.

Some editors are generated once and reused (for example, XenForo), while others are frequently rebuilt (for example, Discourse and NodeBB). Use `observe-cache` to control whether observed triggers are cached.

### Closure

The source is wrapped in a JavaScript closure, which protects internal variables and reduces conflicts with other scripts on the page.

### postMessage

PUP uses the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API to communicate with the Chevereto website.

It restricts accepted origins and validates message payloads. PUP only listens to messages from the configured Chevereto origin.

### Multiple instances

PUP supports multiple simultaneous instances. Instance IDs are generated with a [GUID algorithm](https://en.wikipedia.org/wiki/Universally_unique_identifier).

### Template cache

PUP caches button templates to avoid unnecessary placeholder re-processing, improving performance in multi-instance scenarios.
