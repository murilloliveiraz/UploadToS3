import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { IFileItem } from '../models/IFileItem';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseURL = environment["endPoint"];

  UploadFileAsync(file: File, bucketName: string, prefix?: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucketName', bucketName);
    if (prefix) {
      formData.append('prefix', prefix);
    }

    return this.httpClient.post<any>(`${this.baseURL}/Files`, formData);
  }

  GetAllFilesAsync(bucketName: string) : Observable<IFileItem[]>{
    return this.httpClient.get<IFileItem[]>(`${this.baseURL}/Files?bucketName=${bucketName}`);
  }
}
