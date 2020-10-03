import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[]): string {
    if (!imagenes){
      return 'assets/img/original.png';
    }
    if (imagenes.length>0){
      return imagenes[0].url;
    }
    else{
      return null;
    }
  }

}
