interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ZuA4OQTcwiwHwm36gn9QnmJlT4lgAPsq',
  domain: 'flight-app.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
