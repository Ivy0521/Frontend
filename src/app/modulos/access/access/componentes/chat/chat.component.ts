import { Component, NgModule, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AlertService } from '../../service/alert.service';
import { ChatService } from '../../service/chat-service.service'; // Importacion del servicio que comunica con la api



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(private alertService:AlertService,
              private chatService: ChatService // Inyeccion del servicio que comunica con la api, esto permise utilizarle dentro de la clase
              ) { 
    this.alertService.loadScript();
  } 
  @ViewChild('messageContainer') messageContainer!: ElementRef

  public file:File | any; // variable que alamcena de manera temporal el archivo que sera enviado al backend
  public confirmDataFromApi:boolean = false; // variable que permite controlar el spinner de cargar en el proceso realizado en el backend

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

    // funcion necesaria para enviar el archivo pdf al backend, hace uso del servicio inyectado
    async sendFile(){
      this.chatService.sendFile(this.file).subscribe({
        next:(resp:any)=>{
          this.confirmDataFromApi = true; // si se obtiene respuesta es porque el archivo se ha subido, se cambia el estado de esa variable para controlar el spinner

        }
      })
    }
    // funcion necesaria para enviar cada pregunta al backend sobre el archivo enviado
    async sendQuery(){
      this.chatService.sendQuery(this.nuevoMensaje).subscribe({
        next:(resp:any)=>{
          this.nuevoMensajeIA = resp.respuesta; // asigna la respuesta del backend a la variable correspondiente
          this.setMessageFromIA();
          console.log(resp);
        }
      })
    }

    setMessageFromIA(){
      let mensaje= {
        emisor:"ia",
        texto: this.nuevoMensajeIA
      }
      this.mensajes.push(mensaje) // Agrega el nuevo mensaje a la lista
      this.nuevoMensajeIA="" // Resetea el input
    }

    //Usurios de prueba
    usuario = 'user'
    usuarioIA = 'ia'

    // Lista de prueba para el envio y recepcion de los msj identificados por el tipo de emisor
    mensajes: any = [

    ]

    // Lista de los pdf
    pdf: any = []


    public isFile: Boolean = false; // Variable utilizada para mostrar cierta parte de la vista
    public pdfSrc: string = ''; // almacena la direccion o ubicacion del documento PDF

    onFileSelected() {
      let $img: any = document.querySelector('#file'); // Variable que recupera el pdf sleccionado
      this.file = $img.files[0];
      this.sendFile();
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
      this.sendQuery();
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
