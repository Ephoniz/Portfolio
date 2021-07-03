Rails.application.routes.draw do
  
  root      'home#index'
  resources :home, only: [:index, :new, :create]
 
  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
