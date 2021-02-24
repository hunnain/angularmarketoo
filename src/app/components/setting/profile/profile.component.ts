import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';
import { CommonService } from 'src/app/shared/service/common.service';

interface Profile {
  chineseFname: string;
  englishFname: string;
  email: string;
  gender: string;
  shopName: string;
  shopLocation: string;
  shopIntro: string
}

enum DeactiveAcount {
  PrivacyConcern = 0,
  Temporary = 1,
  Other = 2
}

enum DeleteAcount {
  NoLongerUsable = 0,
  SwitchAccount = 1,
  Other = 2
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public loading: boolean = false;
  public deleting: boolean = false;
  public deactivating: boolean = false;
  public submittingPic: boolean = false;
  public isEdit: boolean = false;
  public announcement: string = '';
  public allowDesktopNotifications: boolean = false;
  public enableNotifications: boolean = false;
  public getNotificationForOwnActivity: boolean = false;
  public dnd: boolean = false;
  public deleteAccount: number;
  public deactivateAccount: number;
  public tempProfileImage: string;
  public profileImage: string;

  public sellerForm: FormGroup;
  public profile: Profile;
  public userInfo;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private cs: CommonService,
    private modalService: NgbModal,

  ) {
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
      this.deleting = loading;
      this.deactivating = loading;
      this.submittingPic = loading;
      // this.modalService.dismissAll('close');
    });

    this.createProfileForm();

    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo) {
      let { chineseFname, englishFname, email, gender, imageUrl, shopName = "", shopLocation = "", shopIntro = "", profileSetting } = this.userInfo;
      this.profile = this.userInfo;
      this.sellerForm.setValue({ chineseFname, englishFname, email, gender, shopName, shopLocation, shopIntro });
      this.profileImage = imageUrl || '';
      if (profileSetting) {
        this.initializeSetting(profileSetting)
      }
    }
  }

  createProfileForm() {
    this.sellerForm = this.fb.group({
      chineseFname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      englishFname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')]],
      gender: ['', [Validators.required]],
      shopName: ['', [Validators.required]],
      shopLocation: ['', [Validators.required]],
      shopIntro: ['', [Validators.required]],
    })
  }

  initializeSetting(settings) {
    const { sellerId, ...remaingSettings } = settings;
    this.announcement = remaingSettings.announcement;
    this.allowDesktopNotifications = remaingSettings.allowDesktopNotifications;
    this.enableNotifications = remaingSettings.enableNotifications;
    this.getNotificationForOwnActivity = remaingSettings.getNotificationForOwnActivity;
    this.dnd = remaingSettings.dnd;
    this.deleteAccount = remaingSettings.deleteAccount;
    this.deactivateAccount = remaingSettings.deactivateAccount;
  }

  ngOnInit() { }

  handleSubmit() {
    this.loading = true;
    let data = {
      announcement: this.announcement,
      allowDesktopNotifications: this.allowDesktopNotifications,
      enableNotifications: this.enableNotifications,
      getNotificationForOwnActivity: this.getNotificationForOwnActivity,
      dnd: this.dnd
    }
    console.log("component submit", data);
    this.authService.updateProfileSettings(data).subscribe(res => {
      if (res) {
        this.loading = false;
        this.userInfo = { ...this.userInfo, profileSetting: { ...data } }
        this.authService.writeToLS('userInfo', JSON.stringify(this.userInfo))
      }
    })
  }

  editProfile() {
    console.log("edit")
    this.isEdit = true;
  }

  submitProfile() {
    this.loading = true;
    let data = { ...this.sellerForm.value };
    this.authService.updateProfile(data).subscribe(res => {
      console.log("profile res--", res)
      if (res) {
        this.cs.isLoading.next(false);
        this.loading = false;
        this.isEdit = false;
        this.profile = data;
        this.userInfo = { ...this.userInfo, ...data }
        this.authService.writeToLS('userInfo', JSON.stringify(this.userInfo))
      }
    })
  }

  handleDeactiveAccount() {
    this.deactivating = true;
    console.log(this.deactivateAccount)
    this.authService.deactivateAccount(this.deactivateAccount).subscribe(res => {
      if (res) {
        console.log(res);
        this.deactivating = false
      }
    })
  }

  handleDeleteAccount() {
    this.deleting = true;
    console.log(this.deleteAccount)
    this.authService.deleteAccount(this.deleteAccount).subscribe(res => {
      if (res) {
        console.log(res);
        this.deleting = false;
      }
    })
  }

  saveProfilePic() {
    this.submittingPic = true;
    let splited = this.tempProfileImage.split('base64,');
    let byteImg = splited[1];
    let data = {
      image: byteImg
    }
    this.authService.updateProfilePic(data).subscribe(res => {
      if (res) {
        console.log(res);
        this.cs.isLoading.next(false);
        this.submittingPic = false;
        this.profileImage = this.tempProfileImage;
        this.tempProfileImage = "";
        this.userInfo = { ...this.userInfo, imageUrl: res['profilePicUrl'] }
        this.authService.writeToLS('userInfo', JSON.stringify(this.userInfo))
        this.modalService.dismissAll('close')
      }
    })
  }

  // cropper 
  openCropper(content) {
    this.open(content);
  }

  getCroppedImage(croppedImg) {
    // console.log("crop image", croppedImg)
    this.tempProfileImage = croppedImg
  }

  // modal event
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {
          this.tempProfileImage = "";
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
