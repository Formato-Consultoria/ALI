import { IframeProps } from "@/@Types/iframes";

/** Exemplo:
 * {
 *    name: "ALI TD",
 *    iframe: <iframe width="1138px" height="550px" title="teste" src="https://app.powerbi.com/..."></iframe>
 * }
*/

/**
 * OBS:
 * 1º remova do iframe qualquer atributo que não seja: title e src
 * 2º coloque a variavel 'style' dentro das chaves do className do iframe
 */

const style = "pt-2.5 h-[550px] sm:w-full";

export const PBI: IframeProps[] = [
    {
        name: "ALI Produtividade",
        iframe: <iframe className={style} title="ALI" src="https://app.powerbi.com/view?r=eyJrIjoiOTQ0Y2Y3NTAtNGYzNy00OWVhLWFmNzAtYWQzYjJlYmZkMWUxIiwidCI6ImJiNGYwY2FkLWVhOTMtNGY3NS1iZWQ0LTdiNGU3YmJhMmM1NSJ9"></iframe>
    },
    {
        name: "ALI Transformação digital",
        iframe: <iframe className={style} title="ALI" src="https://app.powerbi.com/view?r=eyJrIjoiMDgwYWVjNTYtYTRiZC00ZWY5LWI3MjktOGY5ZTE1ZWFlNjM0IiwidCI6ImJiNGYwY2FkLWVhOTMtNGY3NS1iZWQ0LTdiNGU3YmJhMmM1NSJ9"></iframe>
    }
]