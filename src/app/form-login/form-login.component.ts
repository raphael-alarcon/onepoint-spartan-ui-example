import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideMail } from '@ng-icons/lucide';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, HlmInputDirective, HlmLabelDirective, HlmButtonDirective],
  providers: [provideIcons({lucideMail})],
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {}
