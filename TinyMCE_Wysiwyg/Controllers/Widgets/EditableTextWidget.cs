using HBS.TinyMCE_Wysiwyg;
using Kentico.PageBuilder.Web.Mvc;

[assembly: RegisterWidget("HBS.EditableText", "Editable Text (TinyMCE)", propertiesType : typeof(EditableTextWidgetProperties), customViewName: "Widgets/_EditableTextWidget", Description = "Provides an editable text region that can be used to enter page content. Not needed if you use Froala.", IconClass = "icon-w-editable-text"  )]