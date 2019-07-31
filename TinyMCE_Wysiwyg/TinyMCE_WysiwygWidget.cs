using Kentico.PageBuilder.Web.Mvc;
using HBS.TinyMCE_Wysiwyg.Kentico.MVC;

// Registers the Widget, pointing to the View that is actually compiled and located in the TinyMCE_Wysiwyg.View project.
[assembly: RegisterWidget("HBS.TinyMCE_Wysiwyg", "Sample widget", typeof(TinyMCE_WysiwygWidgetModel), customViewName: "Widgets/_TinyMCE_Wysiwyg")]

// FOR TESTING
// You can change the registration to point to a local View (non compiled) in order to debug.  
// This particular view is on my MVC Project, NOT my compiled TinyMCE_Wysiwyg.View project
//[assembly: RegisterWidget("HBS.TinyMCE_Wysiwyg", "Sample widget", typeof(TinyMCE_WysiwygWidgetModel), customViewName: "Widgets/_TinyMCE_Wysiwyg_Test")]
