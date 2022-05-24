Rails.application.routes.draw do
  
  resources :messages
  resources :license_beats
  resources :studio_session_carts
  resources :studio_sessions_users
  resources :cart_beats
  resources :user_beats
  resources :studio_sessions
  resources :events
  resources :carts
  resources :licenses
  resources :beats
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


  
  # devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#login'

  post '/login_with_email', to: 'sessions#create_using_google_account'

  delete '/logout', to: 'sessions#logout'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "show_featured_beats", to: "beats#show_featured_beats"
  get "show_current_deals_and_sales", to: "beats#show_current_deals_and_sales"
  get "show_newest_beats", to: "beats#show_newest_beats"

  post "create_cart_beat_mp3", to: "cart_beats#create_with_mp3_license"
end
