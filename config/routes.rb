Rails.application.routes.draw do
  
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
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
