using HBS.TinyMCE_Wysiwyg;
using Kentico.PageBuilder.Web.Mvc;

[assembly: RegisterWidget("HBS.EditableText", "Editable Text", propertiesType : typeof(EditableTextWidgetProperties), customViewName: "Widgets/_EditableTextWidget", Description = "Provides an editable text region that can be used to enter page content.", IconClass = "icon-w-editable-text"  )]