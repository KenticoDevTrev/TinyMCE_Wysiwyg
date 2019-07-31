using HBS.TinyMCE_Wysiwyg;
using Kentico.PageBuilder.Web.Mvc;

[assembly: RegisterWidget("HBS.RichText", "Rich Text", propertiesType: typeof(RichTextWidgetProperties), customViewName: "Widgets/_RichTextWidget", Description = "The Rich text widget can be used to place HTML content onto the page. Users may utilize a WYSIWYG toolbar while editing the text, which provides various additional formatting and content options.", IconClass = "icon-w-rich-text")]