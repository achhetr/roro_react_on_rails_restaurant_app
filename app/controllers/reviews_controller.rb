class ReviewsController < ApplicationController
  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    review = restaurant.reviews.build(review_params)
    if(review.save)
      redirect_to restaurant_path(restaurant)
    else
      render 'new'
    end
  end

  private
  def review_params
    params.require(:review).permit(:username, :comment, :rating)
  end
end