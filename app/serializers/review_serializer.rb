class ReviewSerializer
  include JSONAPI::Serializer
  attributes :username, :message, :restaurant_id, :rating
end
