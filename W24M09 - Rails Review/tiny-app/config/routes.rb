Rails.application.routes.draw do
  resources :pets
  resources :urls
  resources :users
  get '/urls/create', to: 'urls#new'
end
