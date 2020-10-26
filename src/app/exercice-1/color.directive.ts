import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({selector: '[appColorDirective]'})
export class ColorDirective{
    // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
    @HostListener('window:keydown', ['$event']) windowKeydown($event) {
       switch($event.keyCode){
        case 37: // Left
            this.el.nativeElement.style.color = "blue";
            break;
        case 38: // Up
            this.el.nativeElement.style.color = "green";
            break;
        case 40: // Down
            this.el.nativeElement.style.color = "red";
            break;
        case 39: // Right
            this.el.nativeElement.style.color = "orange";
            break;
       }
       
    }

    constructor(private el: ElementRef){}
}