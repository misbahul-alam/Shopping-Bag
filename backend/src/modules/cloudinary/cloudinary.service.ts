import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { url } from 'inspector/promises';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  private extractPublicId(url: string): string {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    const publicId = filename.split('.')[0];
    return publicId;
  }

  uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'shopping_bag' },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result)
            return reject(new Error('No result returned from Cloudinary'));
          resolve(result);
        },
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  uploadFiles(files: Express.Multer.File[]): Promise<UploadApiResponse[]> {
    const uploadPromises = files.map((file) => this.uploadFile(file));
    return Promise.all(uploadPromises);
  }

  deleteFile(url: string): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const publicId = this.extractPublicId(url);
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}
