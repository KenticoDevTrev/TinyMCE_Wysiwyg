using Kentico.PageBuilder.Web.Mvc;

namespace HBS.TinyMCE_Wysiwyg
{
    /// <summary>
    /// Properties for Editable Text widget.
    /// </summary>
    public class EditableTextWidgetProperties : IWidgetProperties
    {
        /// <summary>
        /// HTML formatted text.
        /// </summary>
        public string Html { get; set; }
    }
}