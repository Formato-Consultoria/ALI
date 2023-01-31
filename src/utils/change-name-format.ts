import { IframeProps } from "@/@Types/iframes";

export const changeNameFormat = (str: string): string => {
    const nameFn = str.toUpperCase().replace(" ", "-")

    return nameFn;
}