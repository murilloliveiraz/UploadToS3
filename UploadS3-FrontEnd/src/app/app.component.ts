import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UploadS3-FrontEnd';
  selectedFile: File;
  fileErrors: boolean = false;

  bucketForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private filesService: FilesService
  ) {}

  ngOnInit() {
    this.bucketForm = this.formBuilder.group({
      prefix: [''],
    });
  }

  onFileSelected(event: Event){
    const fileInput = event.target as HTMLInputElement;
    if(fileInput.files && fileInput.files.length > 0){
      this.selectedFile = fileInput.files[0];
    }
  }

  dadosForm() {
    return this.bucketForm.controls;
  }

  enviar() {
    const dados = this.dadosForm();
    const bucket = 'murilloxz-bucket';
    const prefix = dados['prefix'].value;
    debugger
    if (this.selectedFile) {
      this.filesService.UploadFileAsync(this.selectedFile, bucket, prefix).subscribe({
        next: (response) => console.log('Upload successful!', response),
        error: (error) => console.error('Upload failed!', error),
      });
    } else {
      this.fileErrors = true;
    }
  }
}
