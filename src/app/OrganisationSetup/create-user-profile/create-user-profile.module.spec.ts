import { CreateUserProfileModule } from './create-user-profile.module';

describe('CreateUserProfileModule', () => {
  let createUserProfileModule: CreateUserProfileModule;

  beforeEach(() => {
    createUserProfileModule = new CreateUserProfileModule();
  });

  it('should create an instance', () => {
    expect(createUserProfileModule).toBeTruthy();
  });
});
