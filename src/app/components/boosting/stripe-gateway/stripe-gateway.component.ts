import { ChangeDetectorRef, Component,ElementRef,Input,OnInit, ViewChild } from '@angular/core';

declare var stripe: any;
declare var elements: any;

@Component({
  selector: 'app-stripe-gateway',
  templateUrl: './stripe-gateway.component.html',
  styleUrls: ['./stripe-gateway.component.scss']
})
export class StipeGatewayComponent implements OnInit {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  @Input() _totalAmount: number;
    card: any;
    cardHandler = this.onChange.bind(this);
    cardError: string;

  constructor(private cd: ChangeDetectorRef) {
      // this._totalAmount = 30
  }
  ngOnInit(){}

  ngOnDestroy() {
          if (this.card) {
              // We remove event listener here to keep memory clean
              this.card.removeEventListener('change', this.cardHandler);
              this.card.destroy();
          }
      }
  ngAfterViewInit() {
          this.initiateCardElement();
      }
  initiateCardElement() {
          // Giving a base style here, but most of the style is in scss file
          const cardStyle = {
              base: {
                  color: '#32325d',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                      color: '#aab7c4',
                  },
              },
              invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
              },
          };
          this.card = elements.create('card', {cardStyle});
          this.card.mount(this.cardInfo.nativeElement);
  this.card.addEventListener('change', this.cardHandler);
      }
  onChange({error}) {
          if (error) {
              this.cardError = error.message;
          } else {
              this.cardError = null;
          }
          this.cd.detectChanges();
      }
  async createStripeToken() {
          const {token, error} = await stripe.createToken(this.card);
          if (token) {
              this.onSuccess(token);
          } else {
              this.onError(error);
          }
      }
  onSuccess(token) {
          // this.dialogRef.close({token});
          console.log("success",token)
      }
  onError(error) {
          if (error.message) {
              this.cardError = error.message;
          }
      }
}
