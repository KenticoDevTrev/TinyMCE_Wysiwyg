using Kentico.Forms.Web.Mvc;
using Kentico.PageBuilder.Web.Mvc;

namespace HBS.TinyMCE_Wysiwyg.Kentico.MVC
{
    public class TinyMCE_WysiwygWidgetModel : IWidgetProperties
    {
        // Defines a property and sets its default value
        [EditingComponent(TextInputComponent.IDENTIFIER, Order = 0, Label = "Text")]
        public string TextValue { get; set; } = "Hello World";
    }
}
