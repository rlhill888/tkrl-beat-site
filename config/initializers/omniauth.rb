Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, ENV['435900012800-ideju25l0capooh741acjnja591slp78.apps.googleusercontent.com'], ENV['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']
  end
  OmniAuth.config.allowed_request_methods = %i[get]