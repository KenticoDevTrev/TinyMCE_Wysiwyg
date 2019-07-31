using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Web.Routing;

using CMS.DocumentEngine;
using CMS.Helpers;
using CMS.Membership;

using Kentico.Content.Web.Mvc;
using Kentico.Web.Mvc;

namespace HBS.TinyMCE_Wysiwyg
{
    /// <summary>
    /// Extension methods for <see cref="HtmlHelper{TModel}"/> class.
    /// </summary>
    public static class HtmlHelperExtensions
    {
        /// <summary>
        /// Writes an End Div Tag
        /// </summary>
        /// <param name="htmlHelper">The Html Helper</param>
        /// <returns>The end Tag of the Div</returns>
        public static MvcHtmlString EndDiv(this HtmlHelper htmlHelper)
        {
            return MvcHtmlString.Create("</div>");
        }

        /// <summary>
        /// Creates a Starting Div
        /// </summary>
        /// <param name="ID">The ID</param>
        /// <param name="Name">The Name</param>
        /// <param name="Class">The CSS Class</param>
        /// <param name="HtmlAttributes">Additional Attributes</param>
        /// <returns>The Start Div</returns>
        public static MvcHtmlString BeginDiv(this HtmlHelper htmlHelper, string ID = null, string Name = null, string Class = null, IDictionary<string, object> HtmlAttributes = null)
        {
            return Div(htmlHelper, true, ID, Name, Class, HtmlAttributes);
        }



        /// <summary>
        /// Generates a Div tag
        /// </summary>
        /// <param name="ID">The ID</param>
        /// <param name="Name">The Name</param>
        /// <param name="Class">The CSS Class</param>
        /// <param name="HtmlAttributes">Additional Attributes</param>
        /// <param name="StartTagOnly">If you wish to only generate the open tag vs. the self closed tag.</param>
        /// <returns>The div tag</returns>
        public static MvcHtmlString Div(this HtmlHelper htmlHelper, bool StartTagOnly = false, string ID = null, string Name = null, string Class = null, IDictionary<string, object> HtmlAttributes = null)
        {
            var DivTag = new TagBuilder("div");
            if (!string.IsNullOrWhiteSpace(ID))
            {
                DivTag.Attributes.Add("id", ID);
            }
            if (!string.IsNullOrWhiteSpace(Name))
            {
                DivTag.Attributes.Add("name", Name);
            }
            if (!string.IsNullOrWhiteSpace(Class))
            {
                DivTag.Attributes.Add("class", Class);
            }
            if (HtmlAttributes != null)
            {
                foreach (string key in HtmlAttributes.Keys)
                {
                    DivTag.Attributes.Add(key, (HtmlAttributes[key] != null ? HtmlAttributes[key].ToString() : null));
                }
            }

            return MvcHtmlString.Create(DivTag.ToString((StartTagOnly ? TagRenderMode.StartTag : TagRenderMode.SelfClosing)));
        }
    }
}