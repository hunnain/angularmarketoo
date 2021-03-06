import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  @Output() selectUser = new EventEmitter<any>();

  @Input() allUsers: Array<any> = [];
  @Input() onlineUsers: Array<any> = [];
  @Input() loading: boolean = false;



  public isCustomer: boolean = true;

  public admins: Array<any> = []
  public customers: Array<any> = []
  constructor() { }

  // public users = [
  //   {
  //     id:1,
  //     img: "assets/images/dashboard/user.png",
  //     name: "Vincent Porter",
  //     status: "Online"
  //   },
  //   {
  //     id:2,
  //     img: "assets/images/dashboard/user1.jpg",
  //     name: "Ain Chavez",
  //     status: "28 minutes ago"
  //   },
  //   {
  //     id:3,
  //     img: "assets/images/dashboard/user2.jpg",
  //     name: "Kori Thomas",
  //     status: "Online"
  //   },
  //   {
  //     id:4,
  //     img: "assets/images/dashboard/user3.jpg",
  //     name: "Erica Hughes",
  //     status: "Online"
  //   },
  //   {
  //     id:5,
  //     img: "assets/images/dashboard/man.png",
  //     name: "Ginger Johnston",
  //     status: "2 minutes ago"
  //   },
  //   {
  //     id:6,
  //     img: "assets/images/dashboard/user5.jpg",
  //     name: "Prasanth Anand",
  //     status: "2 hour ago"
  //   },
  //   {
  //     id:7,
  //     img: "assets/images/dashboard/designer.jpg",
  //     name: "Hileri Jecno",
  //     status: "Online"
  //   }
  // ]

  ngOnChanges(change: SimpleChange) {
    console.log('💻', 'on change', change);
    if (change['allUsers']) {
      let userChange = change['allUsers'];
      let user_prev = userChange.previousValue;
      let user_curr = userChange.currentValue;

      if (!user_prev || JSON.stringify(user_curr) !== JSON.stringify(user_prev)) {
        console.log("onchange all users")
        this.allUsers = user_curr;
        if (this.allUsers.length) {
          const groupz = this.groupBy(this.allUsers);
          this.admins = groupz['admin'] || []
          this.customers = groupz['customer'] || []
        }
      }
    }
  }

  ngOnInit() {
    // const groupz = this.groupBy(this.allUsers);
    // this.admins = groupz['admin']
    // this.customers = groupz['customer']
  }

  onUserClick(val) {
    this.selectUser.emit(val)
  }
  changeSellerCustomer() {
    this.isCustomer = !this.isCustomer;
  }

  userStatus(userId) {
    // console.log('💻', userId, this.onlineUsers, this.onlineUsers.includes(userId));
    if (this.onlineUsers.length && this.onlineUsers.includes(userId)) {
      return true;
    }
    return false;
  }

  groupBy(users) {
    console.log('💻', 'group by', users);
    let group = users.reduce((r, a) => {
      r[a.role.toLowerCase()] = [...r[a.role.toLowerCase()] || [], a];
      return r;
    }, {});

    return group;
  }

}
