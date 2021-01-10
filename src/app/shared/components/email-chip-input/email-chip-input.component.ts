import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { find, get, pull } from 'lodash';
@Component({
  selector: 'app-email-chip-input',
  templateUrl: './email-chip-input.component.html',
  styleUrls: ['./email-chip-input.component.scss'],
})
export class EmailChipInputComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  tags: string[] = [];
  @Input() placeholder: string = 'Email Here...';
  // form: FormGroup;
  public tag = null;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.form = this.fb.group({
    //   tag: [undefined],
    // });
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    // const inputValue: string = this.form.controls.tag.value;
    // const inputValue = this.tag;
    if (event.code === 'Backspace' && !this.tag) {
      this.removeTag();
      return;
    } else {
      if (
        event.code === 'Comma' ||
        event.code === 'Space' ||
        event.code === 'Enter'
      ) {
        this.addTag();
        // this.tag =""
        // this.form.controls.tag.setValue('');
      }
    }
  }

  addTag(): void {
    console.log(this.tag);
    // this.tag;
    if (
      this.tag[this.tag.length - 1] === ',' ||
      this.tag[this.tag.length - 1] === ' '
    ) {
      this.tag.slice(0, -1);
    }
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      re.test(this.tag) &&
      this.tag.length > 0 &&
      !this.tags.includes(this.tag)
      // !find(this.tags, this.tag)
    ) {
      this.tags.push(this.tag);
      this.tag = '';
    }
  }

  removeTag(index?: number): void {
    console.log(index);
    if (!index && index != 0) {
      this.tags.splice(-1);
    } else {
      this.tags.splice(index, 1);
    }
  }
}
