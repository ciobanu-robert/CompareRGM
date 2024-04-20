import { Injectable } from '@angular/core';
import { ImageValidatorService } from './image-validator.service';

export type Ratio =
  | '1:1'
  | '4:3'
  | '16:9'
  | '3:2'
  | '5:4'
  | '8:1'
  | '2:35'
  | '1:85'
  | '21:9'
  | '9:16';

@Injectable({
  providedIn: 'root'
})
export class ImageRatioValidatorService {
  constructor(private image: ImageValidatorService) { }

    ratio = (allowedRatio: Ratio[]) =>
    this.image.imageValidator((image) => {
      const { width, height } = image;
      const imageRatio = this.getAspectRatio(width, height);
  
      if (allowedRatio.includes(imageRatio as Ratio)) {
        return null;
      }
  
      return {
        imageRatio: true
      };
    });
  
  getAspectRatio(width: number, height: number): Ratio {
    const calculate = (a: number, b: number): number =>
      b === 0 ? a : calculate(b, a % b);
  
    return `${width / calculate(width, height)}:${
      height / calculate(width, height)
    }` as Ratio;
  }
}
