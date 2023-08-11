import { Component, NgModule, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AlertService } from '../../service/alert.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private alertService:AlertService) { 
    this.alertService.loadScript();
  }
  @ViewChild('messageContainer') messageContainer!: ElementRef

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.messageContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

    ngOnInit(): void {
      this.alertService.loadScript();
      console.log(this.pdf) // Imprimimos la lista de pdf
    }

  inputValue: string = ''; // Valor del input
  isInputEmpty: boolean = true; // Variable para habilitar/deshabilitar el botón

  checkInput() {
    this.isInputEmpty = this.nuevoMensaje.trim() === ''; // Verificar si el input está vacío
  }


    nuevoMensaje: string = "" // Variable que almacena el mensaje ingresado por el usuario
    nuevoMensajeIA: string = "" // Variable de prueba que almacenaba el mensaje de la IA

    // Función que elimina el pdf
    async deleteFile(){
      if(this.isFile == true){
          this.isFile= false
          this.alertService.showAlert('Eliminado con éxito', 2000);
      }
    }

    //Usurios de prueba
    usuario = 'user'
    usuarioIA = 'ia'

    // Lista de prueba para el envio y recepcion de los msj identificados por el tipo de emisor
    mensajes: any = [
      {
        emisor: "user", // tipo de emisor para el usuario
        texto: "¿Quien es el autor del libro?" // Contenido del mensaje
      },
      {
        emisor: "ia", // tipo de emisor para la respuesta(IA)
        texto: " El autor del libro es M. Morris Mano"
      },
      {
        emisor: "user", // tipo de emisor para el usuario
        texto: "¿En que año se publico el libro?" // Contenido del mensaje
      },
      {
        emisor: "ia", // tipo de emisor para la respuesta(IA)
        texto: " El libro se publico en el año 2007"
      },
      // {
      //   emisor: "ia", // tipo de emisor para la respuesta(IA)
      //   texto: "mensaje prueba"
      // }
    ]

    // Lista de los pdf
    pdf: any = []


    public isFile: Boolean = false; // Variable utilizada para mostrar cierta parte de la vista
    public pdfSrc: string = ''; // almacena la direccion o ubicacion del documento PDF

    onFileSelected() {
      let $img: any = document.querySelector('#file'); // Variable que recupera el pdf sleccionado
    
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
    
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result; // Carga la previsualización del PDF
        };
        this.isFile=true
        reader.readAsArrayBuffer($img.files[0]); // $img.files[0]: la ubicacion del documento almacenado
        console.log($img.files[0], 'aqui') // Se muestra en consola los datos del PDF
        let pdfs = {
         documento: $img.files[0]
        }
        this.pdf.push(pdfs)
      }
      this.ngOnInit() // LLamamos la lista
      this.pdf= [] // Limpiamos la lista
    }


  

    // Función del envio del mensaje del usuario
    envioMensaje(){
      console.log(this.nuevoMensaje);
      let mensaje= {
        emisor:this.usuario,
        texto: this.nuevoMensaje
      }
      this.mensajes.push(mensaje) // Agrega el nuevo mensaje a la lista
      this.nuevoMensaje="" // Resetea el input
      this.isInputEmpty = true
    }

    //Función de prueba de la respuesat de la IA

    // envioMensajeIA(){
    //   console.log(this.nuevoMensajeIA);
    //   let mensajeIA= {
    //     emisor:this.usuarioIA,
    //     texto: this.nuevoMensajeIA
    //   }
    //   this.mensajes.push(mensajeIA)
    //   this.nuevoMensajeIA=""
    // }

}
