import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})

export class TemperaturePipe implements PipeTransform {
    transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
        let val: number;
        let outputTemp: number;
        let symbol: '°C' | '°F';

        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9/5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5/9);
        } else {
            outputTemp = val;
        }

        if (!outputType) {
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        return `${outputTemp} ${symbol}`;
    }
}