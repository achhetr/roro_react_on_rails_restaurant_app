class RestaurantSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :capacity, :type_of

  has_many :reviews
end
