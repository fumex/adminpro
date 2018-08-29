import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { retry ,map, filter  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  public subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable().subscribe( 
      numero=>console.log('Subs',numero),
      error=>console.log('error en obs',error),
      ()=>console.log('el obsevador termino')
    );

   }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }
  regresaObservable():Observable<any>{
      return new Observable(observer=>{

        let contador=0;
        let intervalo= setInterval(()=>{
          contador++;

         const salida={
            valor:contador
          };

          observer.next( salida );

          //  if(contador==3){
          //   clearInterval(intervalo);
          //   observer.complete();
          // } 
          //if( contador===2){
            //clearInterval(intervalo);
            //observer.error('auxilio');
         // }
        },1000);

      }).pipe( 

        // map( resp=>resp.valor),
        // filter( (valor,index) => {
        //   if ( (valor % 2)===1){
        //     //impar
        //     return true;
        //   }else{
        //     //par
        //     return false;
        //   }

        // })

      );
  }

}
