import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blogDeHolaMundo');
  listaPosts: Array<object> =[
    
    {
      id : "postCafe", 
      titulo : "Tomando el mejor cafe del pais", 
      descripcion : "Un grano premium cosechado en Jarabacoa con aroma a chocolate.",
      imagenSrc : "/IMG/coffee.jpg", imagenAlt : "Foto de cafe"},
    {
      id : "postTe", 
      titulo : "El te mas sano y rico que existe!", 
      descripcion : "Infusión milenaria de menta y jengibre para resetear tu cuerpo", 
      imagenSrc : "/IMG/tea.jpg", 
      imagenAlt : "Foto de te"},
    {
      id : "postPintura", 
      titulo : "La pintura mas cara del mundo", 
      descripcion : "Obra abstracta subastada por una cifra astronómica de locura.", 
      imagenSrc : "/IMG/painting.jpg", 
      imagenAlt : "Foto de pintura"}  
  ]
  mostrarListaPosts(){
    console.log(this.listaPosts);
    
  }
  ngOnInit(){
    this.mostrarListaPosts();
  }
 
}
