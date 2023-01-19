//import { Component, OnInit, ViewChild } from '@angular/core';
//import { ChartData, ChartOptions } from 'chart.js';
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//
//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
//})
//export class AppComponent implements OnInit {
//  title = 'trialImplementation';
//
//  safeSrc: SafeResourceUrl;
//  ngOnInit(): void {}
//  constructor(private sanitizer: DomSanitizer){
//    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
//  }
//  
//}
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

// 1️⃣
import * as ace from "ace-builds";

// 2️⃣
@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: [
    `
      .app-ace-editor {
        border: 2px solid #f8f9fa;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        
      }
    `,
  ],
})
export class AppComponent implements AfterViewInit {

  // 3️⃣
  @ViewChild("editor")
  private editor!: ElementRef<HTMLElement>;

  // 4️⃣
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    const aceEditor = ace.edit(this.editor.nativeElement);
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    //aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>", );
    aceEditor.setTheme('ace/theme/cobalt');
    aceEditor.session.setMode('ace/mode/javascript');
    
  }
  
}

