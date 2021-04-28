class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    review = restaurant.reviews.new(review_params)
    
    if(review.save) 
      render json: ReviewSerializer.new(review).serializable_hash.to_json
    else
      render json: {error: review.errors.messages}, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :description, :score, :airline_id)
  end
end
