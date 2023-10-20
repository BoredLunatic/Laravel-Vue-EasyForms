import { AlertBorders } from "../../enums";
import { AlertTriggers } from "../../enums";
import { Icon } from "./Icon";
import { GotProps } from "../../abstracts/GotProps";
import { DensityTypes } from "../../enums";
import { PositionTypes } from "../../enums";
import { AlertTypes } from "../../enums";
import { ButtonVariantTypes } from "../../enums";
export declare class Alert extends GotProps {
    auto_close_timer: number;
    border: AlertBorders | boolean;
    border_color: string | undefined;
    closable: boolean;
    close_icon: Icon | string;
    close_label: string;
    color: string | undefined;
    cols: number;
    content_placeholder: string;
    density: DensityTypes;
    display: boolean;
    elevation: number;
    height: string | number | undefined;
    icon: Icon | undefined;
    max_height: string | number | undefined;
    max_width: string | number | undefined;
    min_height: string | number | undefined;
    min_width: string | number | undefined;
    original_text: string;
    position: PositionTypes | undefined;
    prominent: boolean;
    rounded: string | number | boolean;
    tag: string;
    text: string | undefined;
    trigger: AlertTriggers;
    type: AlertTypes | string | undefined;
    variant: ButtonVariantTypes;
    constructor(init?: Partial<Alert>);
    allowedProps(): string[];
    autoClose(): Alert;
    convertContents(text: string): Alert;
    hide(): Alert;
    reset(): Alert;
    show(): Alert;
}
//# sourceMappingURL=Alert.d.ts.map