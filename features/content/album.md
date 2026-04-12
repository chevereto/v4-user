# Album

An album is a user-level content container that works like a folder. It groups media files under a named collection owned by a user, with support for nested sub-albums, privacy controls, and social interactions like sharing and likes.

Albums appear on the user's profile and have their own public URL. They can be browsed, shared, liked, and embedded, and their contents inherit the album's privacy settings.

## Album page

The album page displays the album's contents as a media listing, along with metadata and action buttons.

**Header metadata** includes:

* **Title** — the album name
* **File count** — total number of files in the album
* **Date** — when the album was created (shown as relative time)
* **Views** — how many times the album has been viewed
* **Description** — optional text description shown below the title

## Privacy

Each album has a privacy setting that controls who can view it and its contents. Privacy is set when creating or editing an album.

| Option | Description |
| --- | --- |
| Public | Visible to anyone |
| Private (just me) | Visible only to the album owner |
| Private (anyone with the link) | Visible to anyone who has the direct URL |
| Private (password protected) | Requires a password to view |

:::tip Private media
Media placed inside a private album or sub-album becomes private. Individual media files cannot be made private on their own — privacy is controlled at the album level.
:::

## Sub-albums

Albums support nesting. A sub-album is an album contained within another album. Sub-albums appear in the **Sub albums** tab on the album page, below the description.

Sub-albums have their own name, description, and privacy settings independent of the parent album. They can be created from within the parent album using the **Create sub album** form or the `J` keyboard shortcut from the actions menu.

## Sorting

The media listing inside an album can be sorted by:

* Most recent
* Oldest
* Most viewed
* Most liked
* A-Z

## Sharing

Albums can be shared using the **Share** action (`S` shortcut from the actions menu). The share dialog provides a direct link to the album and options to share to social networks.

Individual media items inside an album can also be shared separately via their own share dialog.

## Likes

Users can like albums and the media within them. The like button is shown as a heart icon on each media item in the listing. Use the `L` shortcut on a selected item to like or unlike it.

## Embed codes

Media items inside an album support embed codes that can be copied and used to embed or link the content elsewhere. Use the `K` shortcut on selected media, or open the actions menu. Codes are available in the following formats:

| Format | Options |
| --- | --- |
| Link | Viewer link, Direct link, Frame link, Thumbnail link, Medium link |
| HTML | Embed, Full linked, Medium linked, Thumbnail linked |
| Markdown | Full, Full linked, Medium linked, Thumbnail linked |
| BBCode | Full, Full linked, Medium linked, Thumbnail linked |

## Creating an album

Requires [Login](../../user/account/login.md).

* From any user section, click **Create new album** or use the `A` shortcut in the actions menu
* Fill in the **Name** (required), optional **Description**, and choose a **Privacy** setting
* Submit the form — you will be redirected to the newly created album

You can also create an album after uploading media:

* After an upload completes, click the **Create new album** link in the post-upload area
* Complete the form — all files just uploaded will be automatically moved into the new album

## Editing an album

Requires [Login](../../user/account/login.md).

* Open the album, then click the **Edit** button above the title or use the `E` shortcut in the actions menu
* The edit form allows changing the **Name**, **Description**, and **Privacy** setting (including adding or removing a password)
* Submit to save changes

## Creating a sub-album

Requires [Login](../../user/account/login.md).

* Open the parent album and click the **Sub-album** button above the title, or use the `J` shortcut
* Fill in the **Name**, optional **Description**, and **Privacy** settings
* Submit the form — the new sub-album will appear in the **Sub albums** tab

## Deleting an album

Requires [Login](../../user/account/login.md).

* Go to your albums, select one or more albums, and use the `Del` shortcut
* Confirm the deletion when prompted

Alternatively, open an album and click the **Delete** button above the title.

## Album cover

Any media item inside an album can be set as the album's cover image.

* Open the album and click the item you want to use as the cover
* Scroll down to the media information and click the cover option, or use the `H` shortcut

## Moving content into an album

Media files and sub-albums can be moved into an album using the **Move to album** action (`M` shortcut). Select one or more items, use `M`, choose the target album, and confirm.

## Actions reference

The following keyboard shortcuts are available in album listings (requires [Login](../../user/account/login.md)):

| Action | Key |
| --- | --- |
| Create album | `A` |
| Create sub-album | `J` |
| Edit | `E` |
| Move to album | `M` |
| Get embed codes | `K` |
| Share | `S` |
| Like | `L` |
| Flag as safe | `V` |
| Flag as unsafe | `F` |
| Delete | `Del` |
| Select all | `.` |
| Clear selection | `Z` |

See [Actions](../listings/actions.md) for full details on the listing actions menu.
