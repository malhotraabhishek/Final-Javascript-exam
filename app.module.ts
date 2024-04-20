import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ServiceService } from './Services/service.service';


@NgModule({
    declarations: [
        
    ],
    imports: [
        HttpClientModule
    ],
    providers: [
        ServiceService,
        provideAnimationsAsync()
    ],
    bootstrap: [
        
    ]
  
})
export class AppModule { }