module ApplicationHelper
  def all_ratings_sum(restaurant)
    rating_sum = 0
    total_review = restaurant.reviews.count
    if total_review > 0
      restaurant.reviews.each { |review| rating_sum += review.rating || 1} 
      return rating_sum.fdiv(total_review).round(2)
    else
      return 5
    end
  end
end
