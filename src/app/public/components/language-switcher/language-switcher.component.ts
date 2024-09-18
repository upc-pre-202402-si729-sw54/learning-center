import {Component, ElementRef} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang;
  }

  useLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang = lang;
  }

}
