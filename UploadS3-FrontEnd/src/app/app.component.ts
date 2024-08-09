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

  bucketForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private filesService: FilesService
  ) {}

  ngOnInit() {
    this.bucketForm = this.formBuilder.group({
      file: ['', [Validators.required]],
      prefix: [''], // Adicionando prefix opcional ao form
    });
  }

  dadosForm() {
    return this.bucketForm.controls;
  }

  enviar() {
    const dados = this.dadosForm();
    const file = dados['file'].value;
    const bucket = 'murilloxz-bucket';
    const prefix = dados['prefix'].value;

    if (file) {
      this.filesService.UploadFileAsync(file, bucket, prefix).subscribe({
        next: (response) => console.log('Upload successful!', response),
        error: (error) => console.error('Upload failed!', error),
      });
    }
  }
}
