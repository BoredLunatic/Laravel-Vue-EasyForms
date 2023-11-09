import HasField from "../contracts/HasField";

import { ServerCall, ServerResponse } from "../classes/server";
import { ValidationRule } from "../classes/properties";
import { Icon, Tooltip } from "../classes/elements";
import { PluginOptions } from "../classes/PluginOptions";
import { AxiosCalls } from "../enums";
import { DensityTypes } from "../enums";
import { ValidationTriggers } from "../enums";
import { TextVariantTypes } from "../enums";
import { GotProps } from "./GotProps";
import type { FieldType } from "../types";
import { isArray, isEmpty, store } from "../composables/utils";
import { ValidationHelper } from "../composables/validation/ValidationHelper";
import { ValidationHandler } from "../composables/validation/ValidationHandler";
import { FunctionBuilder } from "../composables/validation/FunctionBuilder";
import { ActionForm, InputForm } from "../forms";

/**
 * Abstract class representing an EasyField, which is a base class for form fields.
 * @abstract
 * @class
 * @extends GotProps
 * @implements HasField
 */
export abstract class EasyField extends GotProps implements HasField {
  active = false;
  append_icon: Icon | undefined;
  autofocus = false;
  base_color: string | undefined;
  bg_color: string | undefined;
  center_affix = false;
  clear_icon: Icon | undefined;
  clearable = false;
  color: string | undefined;
  cols = 12;
  component = "";
  component_type: string | undefined;
  density: DensityTypes = DensityTypes.Default;
  depends_on = "";
  disabled = false;
  discriminator = "";
  eager = false;
  error = false;
  error_messages: string | string[] = [];
  flat = false;
  focused = false;
  help = "";
  hide_details: boolean | "auto" = false;
  hint: string | undefined;
  id: string | undefined;
  label = "";
  loading = false;
  max_errors: string | number = 1;
  messages: string | string[] = [];
  name = "";
  offset: string | number = 0;
  order = 0;
  outlined = false;
  parent_loaded = false;
  persistent_clear = false;
  persistent_counter = false;
  persistent_hint = false;
  persistent_placeholder = false;
  placeholder = "";
  prefix: string | undefined;
  prepend_icon: Icon | undefined;
  readonly = false;
  require_confirmation = false;
  required = false;
  role: string | undefined;
  rounded: string | number | boolean = false;
  rules: ValidationRule[] = [];
  show_if = false;
  show_if_parent = "";
  show_if_value: any;
  single_line = false;
  suffix: string | undefined;
  theme: string | undefined;
  tooltip: Tooltip | undefined;
  type = "";
  validate_on: ValidationTriggers | undefined;
  validated = true;
  value: any;
  variant: TextVariantTypes = TextVariantTypes.Filled;

  /**
   * Creates an instance of EasyField.
   * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
   */
  constructor(init?: Partial<EasyField>) {
    super(init);

    // Initialize properties and apply default values
    if (!isEmpty(init?.clear_icon)) {
      this.clear_icon = new Icon(init?.clear_icon);
      delete init?.clear_icon;
    }

    if (!isEmpty(init?.append_icon)) {
      this.append_icon = new Icon(init?.append_icon);
      delete init?.append_icon;
    }

    if (!isEmpty(init?.prepend_icon)) {
      this.prepend_icon = new Icon(init?.prepend_icon);
      delete init?.prepend_icon;
    }

    if (!isEmpty(init?.prepend_icon)) {
      this.prepend_icon = new Icon(init?.prepend_icon);
      delete init?.prepend_icon;
    }

    if (!isEmpty(init?.tooltip)) {
      this.tooltip = new Tooltip(init?.tooltip);
      delete init?.tooltip;
    }
    Object.assign(this, init);

    // If required is set to false, check if rules contain required and set it to true.
    if (!this.required) {
      this.required = this.rules.some((rule: ValidationRule) => rule.name === "required" && rule.value);
    } else {
      const validation: ValidationRule | undefined = this.rules.find(
        (rule: ValidationRule) => rule.name === "required",
      );
      if (validation) {
        validation.value = true;
      } else {
        this.rules.push(new ValidationRule({ name: "required", value: true }));
      }
    }

    // Set clearable Icon if not set but clearable is true
    if (this.clearable && isEmpty(this.clear_icon)) {
      this.clear_icon = new Icon({ icon: "mdi-close", color: "secondary" });
    }

    // Check if text_to_placeholder conversion is on.
    const PLUGIN_OPTIONS = PluginOptions.getInstance();
    if (PLUGIN_OPTIONS.tags_on_placeholder && !isEmpty(this.placeholder)) {
      if (this.required) {
        this.placeholder += PLUGIN_OPTIONS.required_placeholder_text;
      } else {
        if (!PLUGIN_OPTIONS.required_tags_only) {
          this.placeholder += PLUGIN_OPTIONS.optional_placeholder_text;
        }
      }
    }

    if (PLUGIN_OPTIONS.tags_on_labels && !isEmpty(this.label)) {
      if (this.required) {
        this.label += PLUGIN_OPTIONS.required_label_text;
      } else {
        if (!PLUGIN_OPTIONS.required_tags_only) {
          this.label += PLUGIN_OPTIONS.optional_label_text;
        }
      }
    }
  }

  addErrorMessage(message: string): this {
    this.validated = false;
    if (isArray(this.error_messages)) {
      const found = (this.error_messages as string[]).find((msg) => msg == message);
      if (!found) {
        (this.error_messages as string[]).push(message);
      }
    }

    return this;
  }

  clearErrorMessages(): this {
    this.error_messages = [];
    return this;
  }

  /**
   * Invalidate the field's validation state.
   * @returns {this} The EasyField instance for method chaining.
   */
  invalidate(): this {
    this.validated = false;
    return this;
  }

  /**
   * Set the loading state of the field.
   * @param {boolean} loading - Whether the field is in a loading state.
   * @returns {this} The EasyField instance for method chaining.
   */
  isLoading(loading: boolean): this {
    this.loading = loading;
    return this;
  }

  /**
   * Check if the parent field is loaded.
   * @param {EasyField} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  isParentLoaded(parent_field: EasyField | undefined): boolean {
    if (isEmpty(this.depends_on)) {
      return true;
    }
    // Check if parent loading data has been set
    return !isEmpty(parent_field?.value);
  }

  /**
   * Load data for the field asynchronously.
   * @param {string} form_name - The name of the form.
   * @param {EasyField} parent - The parent field for additional data.
   * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
   */
  async load(form: InputForm | ActionForm, parent: EasyField): Promise<object | boolean> {
    let response: ServerResponse;
    this.isLoading(true);
    try {
      // Check if additional data is required from the parent.
      let additional_load_data: object = {};
      if (!isEmpty(this.depends_on)) {
        additional_load_data = {
          parent_name: parent.name,
          parent_value: parent.value,
        };
      }
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/fields/load"),
        ServerCall.mergeData({ form_name: form.name, field_name: this.name }, additional_load_data),
        form.axios,
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(response?.data?.loader ?? false);

        if (!response?.data?.result) {
          return false;
        }
        // Save original form data.
        const tempData = JSON.parse(JSON.stringify(response?.data?.data));
        if (isEmpty(tempData)) {
          // Field not loaded
          return false;
        }
        return tempData;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  /**
   * Update the field based on the parent field.
   * @param {this} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  update(parent_field: this): boolean {
    if (isEmpty(this.depends_on)) {
      return true;
    }
    // Check if parent loading data has been set
    return !isEmpty(parent_field.value);
  }

  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  validate(): this {
    this.validated = true;
    return this;
  }

  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  findValidation(name: string): ValidationRule | null {
    return this.rules.find((rule) => rule.name === name);
  }

  /**
   * Apply validation rules to the field.
   * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
   * @returns {any[]} An array of validation results.
   */
  validationRules(fields?: FieldType[]): Array<any> {
    // Check if a validation handler function is present.
    return this.rules
      .filter((rule) => ValidationHelper.exists(rule))
      .map((rule) => {
        // eslint-disable-next-line @typescript-eslint/ban-types
        return (ValidationHandler[rule.name as keyof ValidationHandler] as Function)(
          ...FunctionBuilder.buildArgs(this as FieldType, fields ?? [], rule),
        );
      });
  }
}
