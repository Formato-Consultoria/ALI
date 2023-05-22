import { IframeProps } from "@/@Types/iframes";

/** Exemplo:
 * {
 *    name: "ALI TD",
 *    iframe: <iframe width="1138px" height="550px" title="teste" src="https://app.powerbi.com/..."></iframe>
 * }
*/

/**
 * OBS: config. iframe
 * 1º remova do iframe qualquer atributo que não seja: title e src
 * 2º coloque a variavel 'style' dentro das chaves do className do iframe
 */

const style = "pt-2.5 h-[550px] w-full";

export const PBI: IframeProps[] = [
    {
        name: "ALI Produtividade",
        iframe: <iframe className={style} title="ALI PD" src="https://app.powerbi.com/view?r=eyJrIjoiMjU5OTJiOGMtM2I0Mi00YjY0LWIxMzQtODRiYWY2ODlkYzhmIiwidCI6Ijc3OGEzZTc2LTQ0ZDItNGViYS1iNGI3LTE0NmUyOGQ3MTNmOCJ9"></iframe>
    },
    {
        name: "ALI Transformação digital",
        iframe: <iframe className={style} title="ALI TD" src="https://app.powerbi.com/view?r=eyJrIjoiMTFhMWNiNjktN2E3My00MTRmLTk1NzItZjExM2FmMGUwZTg5IiwidCI6Ijc3OGEzZTc2LTQ0ZDItNGViYS1iNGI3LTE0NmUyOGQ3MTNmOCJ9"></iframe>
    }
]