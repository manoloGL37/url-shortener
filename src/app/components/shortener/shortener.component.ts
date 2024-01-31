import { Component } from '@angular/core';
import { UrlShortenerService } from '../../services/url-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shortener',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shortener.component.html',
  styleUrl: './shortener.component.css',
})
export class ShortenerComponent {
  longUrl: string = '';
  shortUrl: any = '';
  copyOk: boolean = false;

  constructor(private urlService: UrlShortenerService) {
    this.copyOk = false;
  }

  getShortenUrl() {
    this.copyOk = false;
    this.urlService.getShortenUrl(this.longUrl).subscribe({
      next: (res) => {
        this.shortUrl = res.shorturl;
      },
    });
    }

  copy() {
    navigator.clipboard.writeText(this.shortUrl);
    this.copyOk = true;
  }
}
