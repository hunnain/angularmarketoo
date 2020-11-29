import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { find, get, pull } from 'lodash';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  tags: string[] = [];
  form: FormGroup;
  @Output() sendData = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tag: [undefined],
    });
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.form.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (
        event.code === 'Comma' ||
        event.code === 'Space' ||
        event.code === 'Enter'
      ) {
        this.addTag(inputValue);
        this.form.controls.tag.setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(tag) && tag.length > 0 && !this.tags.includes(tag)) {
      this.tags.push(tag);
      this.sendData.emit(this.tags);
    }
  }

  onBlur(): void {
    console.log('blur');
  }

  removeTag(tag?: string): void {
    if (tag || tag === '0') {
      this.tags.splice(Number(tag), 1);
    } else {
      this.tags.splice(-1);
    }
    this.sendData.emit(this.tags);
  }
}
