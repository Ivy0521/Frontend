import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../service/alert.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-cargar-archivo',
  templateUrl: './cargar-archivo.component.html',
  styleUrls: ['./cargar-archivo.component.css']
})
export class CargarArchivoComponent {
   
  constructor(
    private router:Router,
    private _route: ActivatedRoute,
    private modalService: NgbModal,
    private alertService:AlertService) { }

    public files: NgxFileDropEntry[] = [];
    public fileLoaded: Boolean = false;

async deleteFile(){
  if(this.fileLoaded == true){
      this.fileLoaded= false
      this.alertService.showAlert('Eliminado con éxito', 2000);
  }
}

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        this.fileLoaded = true;
        if(this.fileLoaded = true){
          console.log('PDF Cargado con éxito')
        }
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event:any){
    console.log(event);
  }

  public fileLeave(event:any){
    console.log(event);
  }



  toTraduccion(){
    this.router.navigate(['/access/chat']);
  }
}





