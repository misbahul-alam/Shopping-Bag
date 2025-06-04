import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  async uploadFile(file: Express.Multer.File): Promise<UploadApiResponse> {
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

      const stream = Readable.from(file.buffer);
      stream.pipe(uploadStream);
    });
  }
  async uploadFiles(
    files: Express.Multer.File[],
  ): Promise<UploadApiResponse[]> {
    return Promise.all(
      files.map(
        (file) =>
          new Promise<UploadApiResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: 'shopping_bag' },
              (error, result) => {
                if (error) return reject(error);
                if (!result)
                  return reject(
                    new Error('No result returned from Cloudinary'),
                  );
                resolve(result);
              },
            );

            const stream = Readable.from(file.buffer);
            stream.pipe(uploadStream);
          }),
      ),
    );
  }

  async deleteFile(fileURL: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const publicId = this.extractPublicId(fileURL);

      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      });
    });
  }
  private extractPublicId(fileUrl: string): string {
    const url = new URL(fileUrl);
    const parts = url.pathname.split('/');

    const versionIndex = parts.findIndex((part) => /^v\d+/.test(part));
    const publicIdParts = parts.slice(versionIndex + 1);

    const lastPart = publicIdParts.pop();
    const baseName = lastPart?.substring(0, lastPart.lastIndexOf('.')) || '';
    publicIdParts.push(baseName);

    return publicIdParts.join('/');
  }
}
