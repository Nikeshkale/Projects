import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, countryCode?: string): string {
    let code = '+91-'
    if(countryCode == "USA") code = "+1-"
    return code + value;
  }

  // transform(value: number, countryCode: string = 'IN'): string {
  //   const codeMap: { [key: string]: string } = {
  //     IN: '+91-',
  //     USA: '+1-',
  //     UK: '+44-',
  //     AUS: '+61-',
  //     CAN: '+1-',
  //     GER: '+49-',
  //     // add more as needed
  //   };

  //   const code = codeMap[countryCode.toUpperCase()] || '+91-'; // default to India
  //   return code + value;
  // }
}
