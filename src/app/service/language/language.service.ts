import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor() { }
  static getLangName(lang: string): string {
    switch (lang) {
      case 'en' :
        return 'English';
      case 'fr' :
        return 'Français';
      default:
        return lang;
    }
  }
}
