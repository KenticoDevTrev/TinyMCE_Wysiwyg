# TinyMCE Wysiwyg Editor
Adds TinyMCE 5 wysiwyg editor capabilities for MVC.  Includes Editable Text, Rich Text, and the TinyMCE Inline form component.

# Installation
1. Install the `HBS.TinyMCE_Wysiwyg.Kentico.MVC` NuGet Package to your MVC Site

## Widgets
There are two widgets, `Editable Text` which allows you to edit text right on the screen, and `Rich Text` which allows you to edit your content in the Widget Dialog box.

## Form Components
There also is the TinyMCE Form Component:
```[EditingComponent(TinyMCEInputComponent.IDENTIFIER, Label = "Html Content")]```

And the Inline Editor you can call on your Widget as such:

```
@if (Context.Kentico().PageBuilder().EditMode)
{
    Html.RenderPartial("InlineEditors/_TinyMCEEditor", new TinyMCEEditorViewModel
    {
        PropertyName = nameof(Model.Properties.Html),
        Html = Model.Properties.Html
    });
}
```

# Author
This module was created by Troy Landers @ HBS

# Contributions, but fixes and License
Feel free to Fork and submit pull requests to contribute.

You can submit bugs through the issue list and i will get to them as soon as i can, unless you want to fix it yourself and submit a pull request!

This is free to use and modify!

# Compatability
Can be used on any Kentico 12 SP site (hotfix 29 or above).
