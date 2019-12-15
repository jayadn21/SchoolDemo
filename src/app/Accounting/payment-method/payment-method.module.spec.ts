import { PaymentMethodModule } from './payment-method.module';

describe('PaymentMethodModule', () => {
  let paymentMethodModule: PaymentMethodModule;

  beforeEach(() => {
    paymentMethodModule = new PaymentMethodModule();
  });

  it('should create an instance', () => {
    expect(paymentMethodModule).toBeTruthy();
  });
});
