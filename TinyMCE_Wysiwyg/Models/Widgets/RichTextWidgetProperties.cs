using Kentico.Forms.Web.Mvc;
using Kentico.PageBuilder.Web.Mvc;

namespace HBS.TinyMCE_Wysiwyg
{
    /// <summary>
    /// Properties for Editable Text widget.
    /// </summary>
    public class RichTextWidgetProperties : IWidgetProperties
    {
        [EditingComponent(TinyMCEInputComponent.IDENTIFIER, Label = "Html Content")]

        /// <summary>
        /// HTML formatted text.
        /// </summary>
        public string Html { get; set; }
    }
}