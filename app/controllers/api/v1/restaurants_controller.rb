class Api::V1::RestaurantsController < ApplicationController
  protect_from_forgery with: :null_session
  
  def index
    restaurants = Restaurant.all
    render json: RestaurantSerializer.new(restaurants).serializable_hash.to_json
  end

  def show
    restaurant = Restaurant.find(params[:id])
    render json: RestaurantSerializer.new(restaurant).serializable_hash.to_json
  end

  def create
    restaurant = Restaurant.new(restaurant_params)

    if(restaurant.save)
      render json: RestaurantSerializer.new(restaurant).serializable_hash.to_json
    else
      render json: {error: restaurant.errors.messages}, status: 422
    end
  end

  private 

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :capacity, :type_of)
  end

  def options
    @options ||= {include: %i[reviews]}
  end
end
