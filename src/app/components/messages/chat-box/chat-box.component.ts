import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  @ViewChild('scrollMe') scrollMe: ElementRef;
  scrolltop: number = null;

  @Input() user: any = {}
  @Input() loading: boolean = false
  @Input() messages: Array<object> = []
  @Input() onlineUsers: Array<any> = [];

  @Output() sendMsg = new EventEmitter<any>();

  public msg: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log('💻', this.msg);
    if (this.msg.trim()) {
      this.sendMsg.emit(this.msg);
      this.msg = "";
    }
  }

  userStatus(userId) {
    // console.log('💻', userId, this.onlineUsers, this.onlineUsers.includes(userId));
    if (this.onlineUsers.length && this.onlineUsers.includes(userId)) {
      return true;
    }
    return false;
  }

  get onScroll() {
    if (this.scrollMe && this.scrollMe.nativeElement) {
      this.scrolltop = this.scrollMe.nativeElement.scrollHeight;
    }

    return this.scrolltop;
  }

}
