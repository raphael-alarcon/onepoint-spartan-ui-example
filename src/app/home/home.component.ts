import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from '@spartan-ng/ui-card-helm';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';
import { FormLoginComponent } from '../form-login/form-login.component';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HlmCardDirective, HlmCardHeaderDirective, HlmCardTitleDirective, HlmCardDescriptionDirective, HlmAvatarComponent, NgOptimizedImage, HlmAvatarFallbackDirective, HlmAvatarImageDirective, HlmCardContentDirective, FormLoginComponent, HlmAspectRatioDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  private _logoUrl = "https://media.licdn.com/dms/image/D4E0BAQGvpe_509Zo-w/company-logo_200_200/0/1665673493364/onepoint_logo?e=1722470400&v=beta&t=mwv8C-ptEGL7udDegY0LzRqXCnWHS7DLKM2T4VnEgZw";
  get logoUrl() {
    return this._logoUrl;
  }


}
