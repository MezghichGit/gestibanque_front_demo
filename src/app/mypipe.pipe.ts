import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: true
})
export class MypipePipe implements PipeTransform {

  transform(valeur:string): string {
    return "Ing. "+valeur;
  }

}
