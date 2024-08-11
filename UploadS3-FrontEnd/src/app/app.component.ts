import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesService } from '../services/files.service';
import { IFileItem } from '../models/IFileItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UploadS3-FrontEnd';
  selectedFile: File;
  fileErrors: boolean = false;
  filesAtS3: IFileItem[] = [];
  bucket = 'murilloxz-bucket';

  bucketForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private filesService: FilesService
  ) {}

  ngOnInit() {
    this.bucketForm = this.formBuilder.group({
      prefix: [''],
    });
    // this.listFiles();
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

  uploadFile() {
    const dados = this.dadosForm();
    const prefix = dados['prefix'].value;
    if (this.selectedFile) {
      this.filesService.UploadFileAsync(this.selectedFile, this.bucket, prefix).subscribe({
        next: (response) => console.log('Upload successful!', response),
        error: (error) => console.error('Upload failed!', error),
      });
    } else {
      this.fileErrors = true;
    }
  }

  listFiles() {
    this.filesService.GetAllFilesAsync(this.bucket).subscribe({
      next: (response: IFileItem[]) => {
        console.log('Get all files succeeded!');
        this.filesAtS3 = response;
      },
      error: (error) => console.error('Failed to get files!', error),
    });
  }
}
