class ReviewSerializer
  include JSONAPI::Serializer
  attributes :username, :comment, :restaurant_id, :rating
end
