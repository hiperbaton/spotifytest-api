import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[]): string {

    const noImage = 'assets/img/noimage.png';
    if (!value) {
      return noImage;
    }

    if (value.length > 0) {
      return value[0].url;
    } else {
      return noImage;
    }
  }

}
