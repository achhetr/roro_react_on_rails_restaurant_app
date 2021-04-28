Rails.application.routes.draw do
  # root 'reacts#index' 
  root 'restaurants#index'

  # View from rails
  resources :restaurants, only: [:create, :show] do 
    resources :reviews, only: [:create]
  end

  # Api from rails
  namespace :api do
    namespace :v1 do 
      resources :restaurants, only: [:create, :index, :show] do 
        resources :reviews, only: [:create]
      end
    end
  end
end
