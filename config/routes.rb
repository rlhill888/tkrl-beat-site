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

  get "show_featured_beats", to: "beats#show_featured_beats"
  get "show_current_deals_and_sales", to: "beats#show_current_deals_and_sales"
  get "show_newest_beats", to: "beats#show_newest_beats"
end
