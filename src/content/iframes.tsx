import { IframeProps } from "@/@Types/iframes";

/** Exemplo:
 * {
 *    name: "ALI TD",
 *    iframe: <iframe width="1138px"  height="550px" title="teste" src="https://app.powerbi.com/..."></iframe>
 * }
*/

/**
 * OBS: remova do iframe qualquer atributo que não seja: title, src, width e height
 *  coloque as variaveis width e height detro das chaves do width e height do iframe:
 */

const height = "530px";
const width = "1000px";

export const PBI: IframeProps[] = [
    {
        name: "ALI Produtividade",
        iframe: <iframe width={width} height={height} title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiOTQ0Y2Y3NTAtNGYzNy00OWVhLWFmNzAtYWQzYjJlYmZkMWUxIiwidCI6ImJiNGYwY2FkLWVhOTMtNGY3NS1iZWQ0LTdiNGU3YmJhMmM1NSJ9"></iframe>
    },
    {
        name: "ALI Transformação digital",
        iframe: <iframe width={width} height={height} title="ALI td" src="https://app.powerbi.com/view?r=eyJrIjoiMDgwYWVjNTYtYTRiZC00ZWY5LWI3MjktOGY5ZTE1ZWFlNjM0IiwidCI6ImJiNGYwY2FkLWVhOTMtNGY3NS1iZWQ0LTdiNGU3YmJhMmM1NSJ9"></iframe>
    }
]