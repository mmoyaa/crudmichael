import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'busca'
})
export class BuscaPipe implements PipeTransform {

  transform(busca:string[], args:string): string[] {        
       
  
      return busca.slice(0,5);
  }

}
//let result:string[] = [];  

//for(const value of values) {
  //if(value.indexOf(args)> -1) {
    //result = [...result, value];