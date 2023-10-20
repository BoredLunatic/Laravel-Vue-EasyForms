var n = Object.defineProperty;
var a = (s, i, e) => i in s ? n(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e;
var t = (s, i, e) => (a(s, typeof i != "symbol" ? i + "" : i, e), e);
import { A as r } from "./AlertTriggers-367c8134.js";
import { B as l } from "./ButtonVariantTypes-6c8b0d38.js";
import { D as c } from "./DensityTypes-eaa8882a.js";
import { G as d, i as o, I as h } from "./Icon-29f81fc8.js";
class u extends d {
  constructor(e) {
    super(e);
    t(this, "auto_close_timer", 0);
    t(this, "border", !1);
    t(this, "border_color");
    t(this, "closable", !1);
    t(this, "close_icon", "$close");
    t(this, "close_label", "$vuetify.close");
    t(this, "color");
    t(this, "cols", 12);
    t(this, "content_placeholder", "<response-data>");
    t(this, "density", c.Default);
    t(this, "display", !1);
    t(this, "elevation", 0);
    t(this, "height");
    t(this, "icon");
    t(this, "max_height");
    t(this, "max_width");
    t(this, "min_height");
    t(this, "min_width", 0);
    t(this, "original_text", "");
    t(this, "position");
    t(this, "prominent", !1);
    t(this, "rounded", !1);
    t(this, "tag", "div");
    t(this, "text");
    t(this, "trigger", r.SuccessProcessing);
    t(this, "type");
    t(this, "variant", l.Flat);
    Object.assign(this, e), (o(this.text) || o(this.type)) && (this.trigger === r.Cancelled && (this.icon = this.icon ?? (o(this.text) && o(this.type)) ? new h({ icon: "mdi-alert-decagram" }) : void 0, this.text = this.text ?? "This form has been cancelled.", this.type = this.type ?? "warning"), this.trigger === r.FormReset && (this.icon = this.icon ?? (o(this.text) && o(this.type)) ? new h({ icon: "mdi-recycle" }) : void 0, this.text = this.text ?? "This form has been reset.", this.type = this.type ?? "info")), this.original_text = this.text ?? "";
  }
  /**
   * Returns an array of all allowed props that are present on V-Alert
   * https://vuetifyjs.com/en/api/v-alert/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "border_color",
      "closable",
      "close_icon",
      "close_label",
      "color",
      "density",
      "elevation",
      "height",
      "icon",
      "max_height",
      "max_width",
      "min_height",
      "min_width",
      "position",
      "prominent",
      "rounded",
      "tag",
      "text",
      "trigger",
      "type",
      "variant"
    ];
  }
  /**
   * Prepares auto close feature
   * @returns Alert
   */
  autoClose() {
    return this.auto_close_timer !== 0 && setTimeout(() => this.show(), this.auto_close_timer), this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  convertContents(e) {
    return this.text = this.original_text.replace(this.content_placeholder, e), this;
  }
  /**
   * Hide alert
   * @returns Alert
   */
  hide() {
    return this.display = !1, this;
  }
  /**
   * Reset alerts so they aren't displayed
   * @returns Alert
   */
  reset() {
    return this.hide(), this.text = this.original_text, this;
  }
  /**
   * Show alert
   * @returns Alert
   */
  show() {
    return this.display = !0, this;
  }
}
export {
  u as A
};
